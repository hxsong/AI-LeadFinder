// 独立入口导航组件
// 依赖：prototype/nav-config.json（所有导航配置集中在此文件）
//
// 使用方式：
//   1. 开发阶段：起一个本地静态服务器（任意一种）
//      python -m http.server 8080
//      或 npx serve .
//   2. 修改导航：直接编辑 nav-config.json，无需改本文件
//
// 若无需服务器（直接双击打开 HTML），请将 NAV_CONFIG 内联到本文件：
//   方案A：用 Python 脚本 generate-nav.js 生成内联版
//   方案B：直接修改本文件中的 entryPages 数组（旧方式，仍可用）
//
// 注意：Chrome 等浏览器直接打开 file:// 的 HTML 文件时，
//       fetch() 会因 CORS 策略被阻止，此时请使用本地服务器。

(function() {
    // ============================================================
    // 配置区 — 当无法加载 nav-config.json 时使用此备档配置
    // ============================================================
    const FALLBACK_CONFIG = {
        groups: [
            {
                label: "搜索客户",
                items: [
                    { name: "搜客需求输入", file: "搜客需求输入.html", icon: "search" },
                    { name: "搜客策略预览", file: "搜客策略预览.html", icon: "file-text" },
                    { name: "搜客执行中",   file: "搜客执行中.html",   icon: "loader" },
                    { name: "搜客结果列表", file: "搜客结果列表.html", icon: "list" },
                    { name: "搜客记录",     file: "搜客记录.html",     icon: "clock" }
                ]
            },
            {
                label: "访客雷达",
                items: [
                    { name: "探针部署",       file: "探针部署.html",       icon: "code" },
                    { name: "访客雷达",       file: "访客雷达.html",       icon: "radar" },
                    { name: "访客行为详情",   file: "访客行为详情.html",   icon: "eye" }
                ]
            },
            {
                label: "静态线索",
                items: [
                    { name: "静态线索池", file: "静态线索池.html", icon: "database" },
                    { name: "线索详情",   file: "线索详情.html",   icon: "user" }
                ]
            },
            {
                label: "动态线索",
                items: [
                    { name: "动态线索池",   file: "动态线索池.html",   icon: "zap" },
                    { name: "动态线索详情", file: "动态线索详情.html", icon: "user-check" }
                ]
            },
            {
                label: "账号与资源",
                items: [
                    { name: "租户资源充值",   file: "租户资源充值.html",   icon: "credit-card" },
                    { name: "资源下发确认",   file: "资源下发确认.html",   icon: "check-circle" },
                    { name: "多BOT工作台",   file: "多BOT工作台.html",   icon: "layout" },
                    { name: "业务初始化",     file: "业务初始化.html",     icon: "settings" },
                    { name: "上传业务材料",   file: "上传业务材料.html",   icon: "upload" },
                    { name: "独立站授权",     file: "独立站授权.html",     icon: "link" },
                    { name: "AI业务分析中",   file: "AI业务分析中.html",   icon: "cpu" },
                    { name: "业务分析报告",   file: "业务分析报告.html",   icon: "file-text" }
                ]
            },
            {
                label: "全局设置",
                items: [
                    { name: "提示词语言管理", file: "提示词语言管理.html", icon: "message-square" }
                ]
            }
        ]
    };

    // ============================================================
    // SVG 图标库（与 nav-config.json 的 icon 字段对应）
    // ============================================================
    const ICONS = {
        search:       '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
        radar:        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
        database:     '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>',
        activity:     '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
        "file-text":  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
        loader:       '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
        list:         '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>',
        clock:        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        code:         '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
        eye:          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057 5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>',
        zap:          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
        user:         '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
        "user-check": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        "credit-card":'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
        "check-circle":'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        layout:       '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>',
        settings:     '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
        upload:       '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>',
        link:         '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>',
        cpu:          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
        "message-square": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>'
    };

    // ============================================================
    // 样式
    // ============================================================
    const STYLES = `
    <style>
        #entryNavContainer { font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif; }
        .entry-nav-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 9px 12px;
            border-radius: 10px;
            transition: all 0.2s ease;
            text-decoration: none;
            cursor: pointer;
        }
        .entry-nav-item:hover {
            background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
        }
        .entry-nav-item.active {
            background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
            color: white;
        }
        .entry-nav-item.active .entry-nav-icon { color: white; }
        .entry-nav-item.active .entry-nav-text { color: white; font-weight: 600; }
        .entry-nav-icon {
            width: 18px; height: 18px;
            color: #64748B; flex-shrink: 0;
        }
        .entry-nav-text { font-size: 13px; color: #334155; font-weight: 500; white-space: nowrap; }
        .entry-nav-sep {
            height: 1px;
            background: #F1F5F9;
            margin: 4px 0;
        }
        .entry-nav-group-label {
            font-size: 11px;
            font-weight: 600;
            color: #94A3B8;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px 2px;
        }
        .entry-nav-toggle {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 14px;
            cursor: pointer;
            border-radius: 10px;
            transition: all 0.2s;
        }
        .entry-nav-toggle:hover { background: #F8FAFC; }
        .entry-nav-toggle-label {
            font-size: 11px;
            font-weight: 600;
            color: #94A3B8;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
        .entry-nav-chevron { color: #CBD5E1; transition: transform 0.2s; }
        .entry-nav-group { overflow: hidden; transition: max-height 0.3s ease; }
    </style>
    `;

    // ============================================================
    // 主模板
    // ============================================================
    const NAV_HTML = `
    <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50" id="entryNavContainer">
        <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" style="width: 192px; max-height: 80vh; overflow-y: auto;">
            <div id="entryNavContent"></div>
        </div>
    </div>
    `;

    // ============================================================
    // 核心函数
    // ============================================================
    function getCurrentPageFile() {
        const path = window.location.pathname;
        return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    }

    function getIcon(name) {
        return ICONS[name] || ICONS.search;
    }

    function renderGroup(group, currentPage) {
        const activeItems = group.items.filter(item => item.file === currentPage);
        const hasActive = activeItems.length > 0;

        const itemsHtml = group.items.map(item => {
            const isActive = item.file === currentPage;
            return `
                <a href="${item.file}" class="entry-nav-item ${isActive ? 'active' : ''}">
                    <svg class="entry-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${getIcon(item.icon)}
                    </svg>
                    <span class="entry-nav-text">${item.name}</span>
                </a>
            `;
        }).join('');

        return `
            <div class="entry-nav-group-label">${group.label}</div>
            <div class="entry-nav-group">${itemsHtml}</div>
        `;
    }

    function renderNav(config) {
        const el = document.getElementById('entryNavContent');
        if (!el) return;

        const currentPage = getCurrentPageFile();

        el.innerHTML = config.groups.map(group => renderGroup(group, currentPage)).join('');
    }

    function getBasePath() {
        // 从当前 JS 文件路径推断 nav-config.json 的相对路径
        const scripts = document.querySelectorAll('script[src]');
        let base = '';
        scripts.forEach(s => {
            if (s.src.includes('entry-nav')) {
                const lastSlash = s.src.lastIndexOf('/');
                base = s.src.substring(0, lastSlash + 1);
            }
        });
        return base;
    }

    async function loadConfig() {
        try {
            const base = getBasePath();
            const res = await fetch(base + 'nav-config.json');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return await res.json();
        } catch (e) {
            console.warn('[entry-nav] 无法加载 nav-config.json，使用备档配置。原因：', e.message);
            console.info('[entry-nav] 若要使用配置文件，请通过本地服务器打开页面（如 python -m http.server）');
            return FALLBACK_CONFIG;
        }
    }

    async function init() {
        document.head.insertAdjacentHTML('beforeend', STYLES);
        document.body.insertAdjacentHTML('beforeend', NAV_HTML);

        const config = await loadConfig();
        renderNav(config);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
