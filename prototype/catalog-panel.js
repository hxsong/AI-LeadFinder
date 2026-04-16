(function() {
    'use strict';

    var pagesFiles = [
        "租户资源充值.html",
        "资源下发确认.html",
        "多BOT工作台.html",
        "业务初始化.html",
        "上传业务材料.html",
        "独立站授权.html",
        "AI业务分析中.html",
        "业务分析报告.html",
        "搜客需求输入.html",
        "搜客策略预览.html",
        "搜客执行中.html",
        "搜客记录.html",
        "搜客结果列表.html",
        "静态线索池.html",
        "线索详情.html",
        "探针部署.html",
        "访客雷达.html",
        "访客行为详情.html",
        "动态线索池.html",
        "动态线索详情.html"
    ];

    var docsFiles = [
        "租户资源充值-说明.html",
        "资源下发确认-说明.html",
        "多BOT工作台-说明.html",
        "业务初始化-说明.html",
        "上传业务材料-说明.html",
        "独立站授权-说明.html",
        "AI业务分析中-说明.html",
        "业务分析报告-说明.html",
        "搜客需求输入-说明.html",
        "搜客策略预览-说明.html",
        "搜客执行中-说明.html",
        "搜客记录-说明.html",
        "搜客结果列表-说明.html",
        "静态线索池-说明.html",
        "线索详情-说明.html",
        "探针部署-说明.html",
        "访客雷达-说明.html",
        "访客行为详情-说明.html",
        "动态线索池-说明.html",
        "动态线索详情-说明.html"
    ];

    function injectStyles() {
        var css = `
.catalog-panel {
    position: fixed;
    top: 80px;
    right: 24px;
    width: 560px;
    max-height: 70vh;
    background: white;
    border-radius: 16px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
    z-index: 99;
    overflow: hidden;
    transform: scale(0.9) translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}
.catalog-panel.show {
    transform: scale(1) translateY(0);
    opacity: 1;
    visibility: visible;
}
.catalog-panel-header {
    padding: 16px;
    background: linear-gradient(to right, #3B82F6, #8B5CF6);
    color: white;
}
.catalog-panel-header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.catalog-panel-title {
    font-weight: 600;
    font-size: 16px;
}
.catalog-panel-subtitle {
    font-size: 12px;
    opacity: 0.8;
}
.catalog-panel-close {
    padding: 4px;
    border-radius: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
}
.catalog-panel-close:hover {
    background: rgba(255, 255, 255, 0.2);
}
.catalog-panel-body {
    display: flex;
    max-height: calc(70vh - 80px);
}
.catalog-panel-column {
    flex: 1;
    overflow-y: auto;
    border-right: 1px solid #f1f5f9;
}
.catalog-panel-column:last-child {
    border-right: none;
}
.catalog-panel-column-header {
    padding: 12px 16px;
    background: #f8fafc;
    border-bottom: 1px solid #f1f5f9;
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.catalog-item {
    padding: 10px 16px;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid #f1f5f9;
    display: block;
    text-decoration: none;
    color: inherit;
}
.catalog-item:hover {
    background: #f8fafc;
}
.catalog-item:last-child {
    border-bottom: none;
}
.catalog-item-text {
    font-size: 14px;
    color: #334155;
}
.catalog-item:hover .catalog-item-text {
    color: #3B82F6;
}
`;
        var style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    function injectHTML() {
        var html = `
<div id="catalog-panel" class="catalog-panel">
    <div class="catalog-panel-header">
        <div class="catalog-panel-header-inner">
            <div>
                <div class="catalog-panel-title">原型目录</div>
                <div class="catalog-panel-subtitle">点击跳转到对应页面</div>
            </div>
            <button onclick="toggleCatalog()" class="catalog-panel-close">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="catalog-panel-body">
        <div class="catalog-panel-column">
            <div class="catalog-panel-column-header">原型演示页面</div>
            <div id="catalog-pages-list"></div>
        </div>
        <div class="catalog-panel-column">
            <div class="catalog-panel-column-header">功能说明文档</div>
            <div id="catalog-docs-list"></div>
        </div>
    </div>
</div>
`;
        document.body.insertAdjacentHTML('beforeend', html);
    }

    function renderItems() {
        var pagesList = document.getElementById('catalog-pages-list');
        var docsList = document.getElementById('catalog-docs-list');

        pagesFiles.forEach(function(file) {
            var a = document.createElement('a');
            a.className = 'catalog-item';
            a.href = 'prototype/pages/' + file;
            a.target = '_blank';
            a.innerHTML = '<span class="catalog-item-text">' + file.replace('.html', '') + '</span>';
            pagesList.appendChild(a);
        });

        docsFiles.forEach(function(file) {
            var a = document.createElement('a');
            a.className = 'catalog-item';
            a.href = 'prototype/docs/' + file;
            a.target = '_blank';
            a.innerHTML = '<span class="catalog-item-text">' + file.replace('-说明.html', '页面功能说明') + '</span>';
            docsList.appendChild(a);
        });
    }

    window.toggleCatalog = function() {
        var panel = document.getElementById('catalog-panel');
        if (panel) {
            panel.classList.toggle('show');
        }
    };

    document.addEventListener('click', function(e) {
        var panel = document.getElementById('catalog-panel');
        if (panel && !panel.contains(e.target) && !e.target.closest('button[onclick="toggleCatalog()"]')) {
            panel.classList.remove('show');
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectStyles();
            injectHTML();
            renderItems();
        });
    } else {
        injectStyles();
        injectHTML();
        renderItems();
    }
})();
