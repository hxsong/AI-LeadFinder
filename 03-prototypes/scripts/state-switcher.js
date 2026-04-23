// 页面状态切换器（原型演示用）
// 用于在 loading / empty / error / normal 等状态间切换
// 使用：在页面引入 <script src="../scripts/state-switcher.js"></script>
// 自定义状态：在引入前定义 window.STATE_SWITCHER_CONFIG

(function() {
    // ============================================================
    // 检查配置
    // ============================================================
    if (!window.STATE_SWITCHER_CONFIG) {
        console.error('[StateSwitcher] 错误：必须在引入 state-switcher.js 前定义 window.STATE_SWITCHER_CONFIG');
        console.error('[StateSwitcher] 示例：\n<script>\nwindow.STATE_SWITCHER_CONFIG = {\n    states: [\n        { key: "normal", label: "正常状态", color: "bg-success" },\n        { key: "loading", label: "加载状态", color: "bg-accent" },\n        { key: "empty", label: "空状态", color: "bg-muted" },\n        { key: "error", label: "错误状态", color: "bg-danger" }\n    ]\n};\n</script>');
        return;
    }

    if (!window.STATE_SWITCHER_CONFIG.states || !Array.isArray(window.STATE_SWITCHER_CONFIG.states)) {
        console.error('[StateSwitcher] 错误：STATE_SWITCHER_CONFIG.states 必须是一个数组');
        return;
    }

    // ============================================================
    // 配置
    // ============================================================
    const CONFIG = {
        position: window.STATE_SWITCHER_CONFIG.position || 'top-24 right-4',
        zIndex: window.STATE_SWITCHER_CONFIG.zIndex || 40,
        states: window.STATE_SWITCHER_CONFIG.states
    };

    // ============================================================
    // SVG 图标
    // ============================================================
    const SETTINGS_ICON = `<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`;

    // ============================================================
    // 样式
    // ============================================================
    const STYLES = `
    <style>
        #stateSwitcher {
            position: fixed;
            z-index: ${CONFIG.zIndex};
        }
        #stateSwitcher .state-switcher-btn {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 9999px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #E2E8F0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        #stateSwitcher .state-switcher-btn:hover {
            background: #F8FAFC;
        }
        #stateSwitcher .state-menu {
            position: absolute;
            right: 0;
            top: 48px;
            width: 160px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border: 1px solid #E2E8F0;
            padding: 8px 0;
            display: none;
        }
        #stateSwitcher .state-menu.show {
            display: block;
        }
        #stateSwitcher .state-menu-item {
            width: 100%;
            padding: 8px 16px;
            text-align: left;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.15s ease;
            border: none;
            background: transparent;
        }
        #stateSwitcher .state-menu-item:hover {
            background: #F8FAFC;
        }
        #stateSwitcher .state-menu-item.active {
            background: #F1F5F9;
            font-weight: 500;
        }
        #stateSwitcher .state-indicator {
            width: 8px;
            height: 8px;
            border-radius: 9999px;
            flex-shrink: 0;
        }
    </style>
    `;

    // ============================================================
    // HTML 模板
    // ============================================================
    function getTemplate() {
        const stateButtons = CONFIG.states.map(state => `
            <button class="state-menu-item" data-state="${state.key}" onclick="StateSwitcher.switch('${state.key}')">
                <span class="state-indicator ${state.color}"></span>
                ${state.label}
            </button>
        `).join('');

        return `
        <div id="stateSwitcher" class="${CONFIG.position}">
            <div class="relative">
                <button class="state-switcher-btn" onclick="StateSwitcher.toggle()" title="切换页面状态">
                    ${SETTINGS_ICON}
                </button>
                <div id="stateMenu" class="state-menu">
                    ${stateButtons}
                </div>
            </div>
        </div>
        `;
    }

    // ============================================================
    // 核心逻辑
    // ============================================================
    const StateSwitcher = {
        currentState: CONFIG.states[0]?.key || '',

        init() {
            // 插入样式
            document.head.insertAdjacentHTML('beforeend', STYLES);
            // 插入 HTML
            document.body.insertAdjacentHTML('beforeend', getTemplate());
            // 绑定点击外部关闭
            document.addEventListener('click', (e) => {
                const switcher = document.getElementById('stateSwitcher');
                if (switcher && !switcher.contains(e.target)) {
                    this.hideMenu();
                }
            });
            // 从 URL 初始化状态
            this.initFromURL();
        },

        toggle() {
            const menu = document.getElementById('stateMenu');
            menu.classList.toggle('show');
        },

        hideMenu() {
            const menu = document.getElementById('stateMenu');
            if (menu) menu.classList.remove('show');
        },

        switch(state) {
            // 验证状态是否有效
            if (!CONFIG.states.some(s => s.key === state)) {
                console.warn(`[StateSwitcher] 无效的状态: ${state}`);
                return;
            }

            this.currentState = state;
            this.hideMenu();

            // 触发页面状态切换事件
            window.dispatchEvent(new CustomEvent('statechange', {
                detail: { state, prevState: this.getPreviousState() }
            }));

            // 更新菜单高亮
            document.querySelectorAll('#stateMenu .state-menu-item').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.state === state);
            });

            // 更新 URL
            const url = new URL(window.location);
            const defaultState = CONFIG.states[0]?.key;
            if (state === defaultState) {
                url.searchParams.delete('state');
            } else {
                url.searchParams.set('state', state);
            }
            window.history.replaceState({}, '', url);
        },

        getPreviousState() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('state') || CONFIG.states[0]?.key || '';
        },

        initFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            const state = urlParams.get('state');
            const defaultState = CONFIG.states[0]?.key;
            if (state && CONFIG.states.some(s => s.key === state)) {
                this.currentState = state;
                // 延迟触发，确保页面已加载
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('statechange', {
                        detail: { state, prevState: defaultState }
                    }));
                    // 更新菜单高亮
                    document.querySelectorAll('#stateMenu .state-menu-item').forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.state === state);
                    });
                }, 0);
            }
        },

        // 获取当前配置（供页面使用）
        getConfig() {
            return CONFIG;
        },

        // 获取所有可用的状态 key
        getAvailableStates() {
            return CONFIG.states.map(s => s.key);
        }
    };

    // 暴露到全局
    window.StateSwitcher = StateSwitcher;

    // 自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => StateSwitcher.init());
    } else {
        StateSwitcher.init();
    }
})();
