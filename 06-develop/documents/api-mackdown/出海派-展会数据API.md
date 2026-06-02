# 出海派 - 展会数据 API

## 概述

通过展会名称搜索参展商信息。

**基础 URL**: `{{api.keep1}}`

**认证方式**: Bearer Token（通过 Header 传递）

```
Authorization: Bearer YOUR_TOKEN
```

---

## 核心接口

### 1. 广交会列表

查询广交会参展商/采购商列表。

**接口地址**: `POST /api/canton_fair/get_canton_fair_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | string | 否 | 年限，代表第几届，如124-136 |
| category | string | 否 | 分类，从分类列表中获取名称使用 |
| country_iso_code | string | 否 | 国家，从国家列表中获取country_iso_code值使用 |
| data_from | string | 否 | 数据来源:'官方','第三方' |
| company_name | string | 否 | 采购商公司名字 |
| shopping_list | string | 否 | 采购产品名称 |
| have_mobile | string | 否 | 含有电话记录:0,1 |
| have_email | string | 否 | 含有邮箱记录:0,1 |
| have_website | string | 否 | 含有官网记录:0,1 |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | int | 状态码，1表示成功 |
| msg | string | 返回消息 |
| data | object | 数据对象 |
| data.list | array | 参展商列表 |
| data.list[].id | string | 记录ID |
| data.list[].year | string | 届数 |
| data.list[].company_name | string | 公司名称 |
| data.list[].country | string | 国家 |
| data.list[].category | string | 产品分类 |
| data.list[].shopping_list | string | 采购产品列表 |
| data.list[].contact_name | string | 联系人姓名 |
| data.list[].mobile | string | 联系电话 |
| data.list[].email | string | 邮箱 |
| data.list[].website | string | 官网 |
| data.list[].address | string | 地址 |
| data.list[].data_from | string | 数据来源 |
| data.list[].booth_no | string | 展位号 |
| data.total | int | 总记录数 |
| data.page | int | 当前页码 |
| data.limit | int | 每页数量 |

---

### 2. 获取广交会详情

获取广交会参展记录详情。

**接口地址**: `POST /api/canton_fair/get_canton_fair_detail`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | string | 是 | 广交会记录ID |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | int | 状态码，1表示成功 |
| msg | string | 返回消息 |
| data | object | 详情数据 |
| data.id | string | 记录ID |
| data.year | string | 届数 |
| data.company_name | string | 公司名称 |
| data.country | string | 国家 |
| data.category | string | 产品分类 |
| data.shopping_list | string | 采购产品列表 |
| data.contact_name | string | 联系人姓名 |
| data.mobile | string | 联系电话 |
| data.email | string | 邮箱 |
| data.website | string | 官网 |
| data.address | string | 地址 |
| data.booth_no | string | 展位号 |
| data.data_from | string | 数据来源 |
| data.description | string | 公司描述 |
| data.create_time | string | 创建时间 |
| data.update_time | string | 更新时间 |

---



## 通用响应格式

```json
{
    "code": 1,
    "msg": "返回成功",
    "time": "1734940320",
    "data": {
        "list": [],
        "total": 0
    }
}
```

**响应状态码说明**:

| 状态码 | 说明 |
|--------|------|
| code=1 | 成功 |
| code=0 或其他 | 失败，查看msg字段 |

---

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | Token无效或缺失 |
| 403 | 无权限访问 |
| 404 | 资源不存在 |
| 429 | 请求频率超限 |
| 500 | 服务器内部错误 |
