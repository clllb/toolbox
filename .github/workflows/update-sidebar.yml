# .github/workflows/update-sidebar.yml
name: Update AI Sidebar Only

on:
  workflow_run:
    workflows: ["Sync AI Content & Process Files"]
    types:
      - completed
    branches:
      - main
  workflow_dispatch:  # ✅ 启用手动触发

jobs:
  update-sidebar:
    # ✅ 关键修复：当是 workflow_run 事件时，检查是否成功；当是手动触发时，直接运行
    if: ${{ github.event_name == 'workflow_dispatch' || (github.event_name == 'workflow_run' && github.event.workflow_run.conclusion == 'success') }}
    runs-on: ubuntu-latest
    permissions:
      contents: write

    env:
      SIDEBAR_FILE: "docs/.vitepress/configs/sidebar.ts"

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0

      - name: Setup Git User
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Generate and Update Sidebar
        run: |
          cat > update_sidebar.cjs << 'EOF'
          const fs = require('fs');
          const path = require('path');

          const sidebarPath = process.env.SIDEBAR_FILE;
          const dailyDir = 'docs/AI/daily/cn';
          const weeklyDir = 'docs/AI/weekly/cn';

          function extractDate(filename) {
            const match = filename.match(/(\d{4}-\d{2}-\d{2})/);
            return match ? match[1] : null;
          }

          function getFilesWithDate(dir) {
            if (!fs.existsSync(dir)) return [];
            const files = [];
            const walk = (currentDir) => {
              const entries = fs.readdirSync(currentDir, { withFileTypes: true });
              for (const entry of entries) {
                const fullPath = path.join(currentDir, entry.name);
                if (entry.isDirectory()) {
                  walk(fullPath);
                } else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
                  const dateStr = extractDate(entry.name);
                  // ✅ 修复路径：确保链接格式为 /AI/daily/cn/2026-03/2026-03-18.md
                  let linkPath = fullPath.replace(/^docs/, '');
                  if (!linkPath.startsWith('/')) linkPath = '/' + linkPath;
                  files.push({ 
                    date: dateStr, 
                    originalName: entry.name,
                    link: linkPath,
                    sortKey: dateStr || entry.name 
                  });
                }
              }
            };
            walk(dir);
            return files.sort((a, b) => {
              if (a.date && b.date) return new Date(b.date) - new Date(a.date);
              else if (a.date) return -1;
              else if (b.date) return 1;
              else return b.originalName.localeCompare(a.originalName);
            });
          }

          if (!fs.existsSync(sidebarPath)) {
            console.error(`❌ Sidebar file not found: ${sidebarPath}`);
            process.exit(1);
          }

          let content = fs.readFileSync(sidebarPath, 'utf8');

          // ======================
          // 更新 AI日报 部分
          // ======================
          const dailyStartMarker = `{ text: 'AI日报',`;
          const dailyItemsStart = "items: [";
          const dailyItemsEnd = "],";

          const dailyFiles = getFilesWithDate(dailyDir);
          const dailyItemsStr = dailyFiles.map(f => 
            `        { text: '${f.date}', link: '${f.link}' }`
          ).join(',\n');

          const dailyStartIndex = content.indexOf(dailyStartMarker);
          if (dailyStartIndex !== -1) {
            const itemsStartIndex = content.indexOf(dailyItemsStart, dailyStartIndex);
            if (itemsStartIndex !== -1) {
              const itemsEndIndex = content.indexOf(dailyItemsEnd, itemsStartIndex + dailyItemsStart.length);
              if (itemsEndIndex !== -1) {
                const before = content.substring(0, itemsStartIndex + dailyItemsStart.length);
                const after = content.substring(itemsEndIndex);
                content = before + '\n' + dailyItemsStr + '\n      ' + after;
                console.log('✅ Updated Daily Sidebar Section');
              } else {
                console.warn('⚠️ Could not find end of daily items array.');
              }
            } else {
              console.warn('⚠️ Could not find start of daily items array.');
            }
          } else {
            console.warn('⚠️ AI日报 section not found in sidebar.');
          }

          // ======================
          // 更新 AI周报 部分
          // ======================
          const weeklyStartMarker = `{ text: 'AI周报',`;
          const weeklyItemsStart = "items: [";
          // 找到下一个 "  }"（即对象结束）作为边界
          const weeklyFiles = getFilesWithDate(weeklyDir);
          const weeklyItemsStr = weeklyFiles.map(f => {
            const text = f.date ? `${f.date} 周报` : f.originalName.replace('.md', '');
            return `        { text: '${text}', link: '${f.link}' }`;
          }).join(',\n');

          const weeklyStartIndex = content.indexOf(weeklyStartMarker);
          if (weeklyStartIndex !== -1) {
            const itemsStartIndex = content.indexOf(weeklyItemsStart, weeklyStartIndex);
            if (itemsStartIndex !== -1) {
              // 找到下一个 "  }," 或 "  }"（注意缩进）
              const searchFrom = itemsStartIndex + weeklyItemsStart.length;
              let endIndex1 = content.indexOf('\n    },', searchFrom); // 中间项
              let endIndex2 = content.indexOf('\n  }', searchFrom);   // 最后一项（在 '/AI/' 数组内）

              let actualEndIndex = -1;
              if (endIndex1 !== -1 && (endIndex2 === -1 || endIndex1 < endIndex2)) {
                actualEndIndex = endIndex1;
              } else if (endIndex2 !== -1) {
                actualEndIndex = endIndex2;
              }

              if (actualEndIndex !== -1) {
                const before = content.substring(0, itemsStartIndex + weeklyItemsStart.length);
                const after = content.substring(actualEndIndex);
                content = before + '\n' + weeklyItemsStr + '\n      ' + after;
                console.log(`✅ Updated Weekly Sidebar Section (${weeklyFiles.length} files)`);
              } else {
                console.warn('⚠️ Could not find end of weekly items block.');
              }
            } else {
              console.warn('⚠️ Could not find start of weekly items array.');
            }
          } else {
            console.warn('⚠️ AI周报 section not found in sidebar.');
          }

          fs.writeFileSync(sidebarPath, content);
          EOF

          node update_sidebar.cjs

      - name: Commit and Push Sidebar Changes
        run: |
          git add "$SIDEBAR_FILE"
          if ! git diff --staged --quiet; then
            git commit -m "chore: auto-update AI sidebar (daily & weekly)"
            git push
            echo "✅ Sidebar updated and pushed."
          else
            echo "ℹ️ No sidebar changes needed."
          fi
