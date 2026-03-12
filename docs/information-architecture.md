# Government Shutdown 站点信息架构

## 1. 站点层级

站点建议按四层组织：

| 层级 | 作用 | 代表 URL | 主要变现 |
| --- | --- | --- | --- |
| 事件首页 | 承接爆发流量和最新进展 | `/` | 展示广告、邮件订阅 |
| 年份专题页 | 承接年度搜索和新闻意图 | `/government-shutdown-2026/` | 展示广告 |
| 常青支柱页 | 承接解释型长尾 | `/what-is-a-government-shutdown/` | 展示广告 |
| 问题解决页 | 承接高意图问题搜索 | `/government-shutdown-tax-refunds/` | Affiliate + 广告 |

## 2. URL 规范

建议统一使用短横线、全部小写、尽量直白的 slug。

建议规则：

- 实时专题使用年份：`/government-shutdown-2026/`
- 常青解释页使用问题式 slug：`/what-is-a-government-shutdown/`
- 影响类页面统一前缀：`/government-shutdown-social-security/`
- 倒计时和时间线做成独立页面：`/government-shutdown-countdown/`、`/government-shutdown-timeline/`

## 3. 首页模块

首页不是普通博客首页，而是事件仪表盘。

建议模块顺序：

1. 当前状态横幅
2. 是否已停摆的简短结论
3. 下一个关键时间点或截止日期
4. 最新时间线
5. 重点受影响服务入口
6. 最常见问题入口
7. 邮件订阅模块
8. 相关专题与常青页

每个模块的目的：

| 模块 | 目的 |
| --- | --- |
| 当前状态横幅 | 让用户 3 秒内知道是否停摆 |
| 截止时间模块 | 强化回访和收藏价值 |
| 时间线 | 承接实时新闻意图 |
| 服务入口 | 分发到高搜索量长尾页 |
| FAQ 入口 | 把首页流量导向可持续收录页面 |
| 邮件订阅 | 沉淀事件期流量 |

## 4. 核心内容簇

## 4.1 税务簇

目标：承接高商业意图搜索。

建议页面：

- `/government-shutdown-tax-refunds/`
- `/can-you-file-taxes-during-a-government-shutdown/`
- `/irs-government-shutdown-status/`

变现方式：

- 税务软件 affiliate
- 页面内展示广告

## 4.2 预算与联邦雇员簇

目标：承接联邦雇员和家庭的实际问题搜索。

建议页面：

- `/government-shutdown-federal-workers/`
- `/who-gets-paid-during-a-government-shutdown/`
- `/how-to-survive-a-government-shutdown-paycheck-gap/`

变现方式：

- 预算工具 affiliate
- 邮件订阅
- 页面内展示广告

## 4.3 旅行与服务中断簇

目标：承接护照、航班、国家公园、机场相关搜索。

建议页面：

- `/government-shutdown-passports/`
- `/government-shutdown-tsa/`
- `/government-shutdown-national-parks/`

变现方式：

- 旅行保险 affiliate
- 页面内展示广告

## 4.4 福利与公共服务簇

目标：扩大流量覆盖。

建议页面：

- `/government-shutdown-social-security/`
- `/government-shutdown-va-benefits/`
- `/government-shutdown-medicare/`
- `/government-shutdown-snap-benefits/`

变现方式：

- 以展示广告为主

## 5. 单页模板

每篇内容建议遵循同一结构，便于批量生产和统一转化。

标准模板：

1. 直接回答问题
2. 谁会受影响
3. 谁通常不受影响
4. 当前状态和最近更新时间
5. 官方信息来源
6. 用户接下来可以怎么做
7. 相关问题内链
8. 轻量 CTA 或 affiliate 模块

适合放 affiliate 的位置：

- 结论之后的“如果你现在要处理 X”
- 正文中“下一步怎么做”
- 文末资源推荐

不适合：

- 首页第一屏硬插 affiliate
- 纯解释型文章里塞大量无关推荐

## 6. 首批上线页面

建议第一批至少做以下 12 页：

1. `/government-shutdown-2026/`
2. `/what-is-a-government-shutdown/`
3. `/who-gets-paid-during-a-government-shutdown/`
4. `/government-shutdown-tax-refunds/`
5. `/government-shutdown-passports/`
6. `/government-shutdown-tsa/`
7. `/government-shutdown-social-security/`
8. `/government-shutdown-military-pay/`
9. `/government-shutdown-va-benefits/`
10. `/government-shutdown-national-parks/`
11. `/government-shutdown-federal-workers/`
12. `/government-shutdown-countdown/`

## 7. 内链策略

内链要围绕首页和年份专题页展开。

建议规则：

- 首页链接到全部核心问题页
- 年份专题页链接到时间线、倒计时、服务影响页
- 每个服务影响页回链到首页和年份专题页
- 同一簇内互相内链，例如 `TSA`、`passports`、`national parks`
- 每篇文章底部固定给出 3 到 5 个“你可能还想知道”

## 8. 上线顺序

建议按下面顺序建设：

1. 首页和年份专题页
2. 常青支柱页
3. 税务、护照、TSA、社保四类高需求页
4. 倒计时和时间线页
5. 其余机构/福利页
6. About、Disclosure、Privacy 等信任页面

## 9. 运营节奏

非事件期：

- 保持常青页更新
- 在预算截止日期前 2 到 4 周预热专题页

事件期：

- 首页和年份页高频更新
- 服务影响页同步补充 FAQ
- 用站内内链把实时流量导到可持续收录页面
