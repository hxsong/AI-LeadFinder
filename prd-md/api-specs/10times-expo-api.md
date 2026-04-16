# 10times Events Scraper API (via Apify)

## 简介

从 10times.com 提取贸易展会、会议、展览和研讨会信息。10times 是全球最大的 B2B 活动数据库，拥有 500,000+ 个活动，覆盖 29 个行业。

## 请求格式

通过 Apify 平台调用，支持以下输入参数：

```json
{
  "location": "New York, US",
  "maxItems": 1000
}
```

## 输入参数

### location
- 类型：string
- 说明：地理位置，支持城市名、城市+国家、或坐标
- 示例：`"New York, US"`, `"London, UK"`, `"48.8566,2.3522"`

### country
- 类型：string
- 说明：ISO 国家代码，或 `"WW"` 表示全球
- 默认值：`"WW"`
- 示例：`"US"`, `"DE"`, `"GB"`, `"CN"`

### query
- 类型：string
- 说明：活动名称/描述的文本搜索
- 示例：`"LED"`, `"outdoor"`, `"fintech"`

### category
- 类型：string
- 说明：行业类别 ID
- 默认值：全部类别

### eventType
- 类型：string
- 说明：活动类型
- 可选值：
  - `all` - 全部（默认）
  - `tradeshow` - 贸易展会
  - `conference` - 会议
  - `workshop` - 研讨会

### startDate / endDate
- 类型：string (YYYY-MM-DD)
- 说明：日期范围筛选
- 示例：`"2025-03-01"`, `"2025-06-30"`

### onlineOnly
- 类型：boolean
- 说明：仅包含线上/虚拟活动
- 默认值：`false`

### sortBy
- 类型：string
- 说明：排序方式
- 可选值：`date`, `follows`, `score`, `name`, `distance`
- 默认值：`date`

### sortType
- 类型：string
- 说明：排序方向
- 可选值：`asc`, `desc`
- 默认值：`asc`

### maxItems
- 类型：integer
- 说明：最大抓取数量，0 表示无限制
- 默认值：`0`

### radius
- 类型：integer
- 说明：搜索半径（英里），需配合坐标使用
- 默认值：`50`

## 类别 ID 对照表

| ID | 类别 | ID | 类别 |
|----|------|----| -----|
| 3 | 服装服饰 | 80 | 物流运输 |
| 5 | 汽车汽配 | 106 | 环保废物 |
| 7 | 建筑建材 | 107 | 时尚美容 |
| 13 | 电子电器 | 108 | 食品饮料 |
| 16 | 农业林业 | 113 | 母婴儿童 |
| 19 | 工艺美术 | 125 | 健康健身 |
| 27 | 医疗医药 | 128 | 电力能源 |
| 30 | 包装印刷 | 146 | 银行金融 |
| 34 | 工业工程 | 150 | 安防防务 |
| 37 | 通信电信 | 156 | IT科技 |
| 39 | 珠宝钟表 | 157 | 家具家居 |
| 44 | 机械设备 | 159 | 灯光音响 |
| 46 | 旅游酒店 | 162 | 体育运动 |
| 50 | 化妆品 | 166 | 玩具游戏 |
| 52 | 医疗器械 | 169 | 旅行旅游 |
| 56 | 矿产资源 | 172 | 户外用品 |
| 58 | 石油天然气 | 176 | 宠物用品 |
| 61 | 办公用品 | 180 | 烟酒饮料 |
| 64 | 纸张纸浆 | 183 | 纺织面料 |
| 67 | 石材陶瓷 | 186 | 眼镜光学 |
| 70 | 体育用品 | 189 | 钟表珠宝 |
| 73 | 纺织服装 | 192 | 其他 |

## 请求示例

### 按地区搜索
```json
{
  "location": "Germany",
  "maxItems": 500
}
```

### 按类别筛选
```json
{
  "location": "Germany",
  "category": "156",
  "eventType": "tradeshow",
  "maxItems": 500
}
```

### 日期范围搜索
```json
{
  "country": "US",
  "startDate": "2025-03-01",
  "endDate": "2025-06-30",
  "category": "27",
  "maxItems": 1000
}
```

### 关键词搜索
```json
{
  "location": "London, UK",
  "query": "outdoor",
  "category": "172",
  "eventType": "tradeshow",
  "maxItems": 100
}
```

## 响应数据结构

每个活动包含 59 个数据点：

```json
{
  "name": "Outdoor Retailer Summer",
  "description": "The largest outdoor recreation tradeshow...",
  "dates": "2025-06-15 to 2025-06-17",
  "status": "upcoming",
  "eventType": "tradeshow",
  "location": {
    "city": "Denver",
    "state": "Colorado",
    "country": "United States",
    "venue": "Colorado Convention Center"
  },
  "organizer": {
    "name": "Emerald X",
    "website": "https://..."
  },
  "statistics": {
    "estimatedVisitors": 25000,
    "estimatedExhibitors": 1500,
    "exhibitionArea": 500000
  },
  "exhibitors": [
    {
      "name": "ABC Outdoor Gear",
      "website": "https://...",
      "description": "..."
    }
  ]
}
```

## 关键词提取映射

| 用户意图 | API 参数 |
|----------|----------|
| 地区筛选 | `location` 或 `country` |
| 行业类别 | `category` (使用类别 ID) |
| 活动类型 | `eventType` |
| 关键词 | `query` |
| 时间范围 | `startDate` + `endDate` |

## 使用限制

- 通过 Apify 平台调用，需要 Apify 账户
- 1000 个活动约 60 秒抓取完成
- 实时数据提取，无需 10times 账户
