# Import Genius API

## 简介

Import Genius API 提供全球进出口贸易数据查询服务，覆盖美国及亚洲、欧洲、拉丁美洲等 22 个国家的海关数据。可查询企业进出口记录、产品信息、贸易伙伴等。

## 请求格式

```
GET https://data.importgenius.com/v2/shipments/?q={query}&access_token={accessToken}&country={country}&type={type}
```

## 必需参数

### accessToken
- 类型：string
- 说明：API 访问令牌

### country
- 类型：string
- 说明：查询的国家代码
- 示例：`us` (美国), `vn` (越南), `de` (德国)

### searchField
- 类型：string
- 说明：搜索字段类型
- 常用字段：
  - `product` - 产品名称
  - `shipname` - 发货人名称
  - `consname` - 收货人名称
  - `trademark` - 商标
  - `hscode` - HS 编码

### modifier
- 类型：string
- 说明：匹配方式
- 可选值：
  - `contains` - 包含
  - `exactly` - 精确匹配
  - `any` - 任意匹配
  - `starts_with` - 开头匹配
  - `ends_with` - 结尾匹配

### searchTerm
- 类型：string
- 说明：搜索关键词

## 可选参数

### type
- 类型：string
- 说明：查询进口或出口数据
- 可选值：
  - `im` - 进口数据（默认）
  - `ex` - 出口数据

### startDate / endDate
- 类型：date (YYYY-MM-DD)
- 说明：日期范围筛选

### page
- 类型：integer
- 说明：分页页码

### limit
- 类型：integer
- 说明：每页返回数量

### countOnly
- 类型：boolean
- 说明：仅返回计数

### zipCode / zipCodeFrom / zipCodeLast
- 类型：string/integer
- 说明：美国邮编筛选（仅美国数据）

## 查询结构

```
q=searchField+modifier+searchTerm
```

## 请求示例

### 基本查询
```
GET https://data.importgenius.com/v2/shipments?q=product+contains+LED&display&access_token=YOUR_TOKEN&country=us&type=im
```

### 日期范围查询
```
GET https://data.importgenius.com/v2/shipments?q=shipname+exactly+adidas/date+from+2023-01-01+to+2023-12-31&access_token=YOUR_TOKEN&country=us&type=im
```

### HS 编码查询
```
GET https://data.importgenius.com/v2/shipments?q=hscode+exactly+852859&access_token=YOUR_TOKEN&country=us&type=im
```

### 组合查询
```
GET https://data.importgenius.com/v2/shipments?q=product+contains+LED+and+consname+contains+distributor&access_token=YOUR_TOKEN&country=us&type=im
```

## 响应示例

```json
{
  "total": 150,
  "page": 1,
  "shipments": [
    {
      "id": "123456",
      "shipname": "ABC Trading Co.",
      "consname": "XYZ Distributors",
      "product": "LED Display Screen",
      "hscode": "852859",
      "quantity": 100,
      "value": 50000,
      "date": "2024-01-15",
      "origin": "CN",
      "destination": "US"
    }
  ]
}
```

## 关键词提取映射

| 用户意图 | API 参数 |
|----------|----------|
| 产品类型 | `q=product+contains+{产品关键词}` |
| 企业名称 | `q=consname+contains+{企业名称}` |
| HS 编码 | `q=hscode+exactly+{HS编码}` |
| 地区筛选 | `country={国家代码}` |
| 时间范围 | `/date+from+{开始日期}+to+{结束日期}` |

## 常用 HS 编码参考

| HS 编码 | 产品类别 |
|---------|----------|
| 852859 | LED 显示屏 |
| 852872 | 彩色电视接收机 |
| 854370 | 电气设备 |
| 950691 | 运动器材 |
| 640399 | 鞋类 |
| 420212 | 旅行包 |

## 使用限制

- 需要有效的 access_token
- 有查询配额限制
- 数据更新频率：美国数据每日更新（周日除外），非美国数据每周更新
