import{_ as s,o as n,c as t,e as a}from"./app-482cf959.js";const e={},p=a(`<h1 id="获取轻享卡信息" tabindex="-1"><a class="header-anchor" href="#获取轻享卡信息" aria-hidden="true">#</a> 获取轻享卡信息</h1><blockquote><p>https://manga.bilibili.com/twirp/card.v1.Card/GetUserLightCard</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p><strong>正文参数 (application/x-www-form-urlencoded)：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>登录<code>access_key</code></td><td></td><td>与<code>SESSDATA</code>二选其一</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>响应码</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td></td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>state</td><td>num</td><td>轻享卡开通状态</td><td>0：未开通<br>1：已开通</td></tr><tr><td>show_state</td><td>num</td><td></td><td></td></tr><tr><td>expire_date</td><td>str</td><td>轻享卡到期时间</td><td></td></tr><tr><td>receive_amount</td><td>num</td><td>已领取数量</td><td></td></tr><tr><td>save_money</td><td>num</td><td>已节省漫币</td><td></td></tr><tr><td>index</td><td>num</td><td>默认选择签到周期</td><td></td></tr><tr><td>week</td><td>array</td><td>一个领取周期内的领取状态信息</td><td></td></tr><tr><td>month_reward_state</td><td>num</td><td>是否可选择全勤奖</td><td>0：不可领取<br>1：可领取<br>2：不可领取（灰色）</td></tr><tr><td>month_reward</td><td>num</td><td></td><td></td></tr><tr><td>cur_month_end</td><td>str</td><td>全勤奖领取剩余时间</td><td></td></tr><tr><td>server_time</td><td>str</td><td>当前服务器时间</td><td></td></tr></tbody></table><p><code>week</code>数组中的对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>index</td><td>num</td><td>第几领取周期</td><td>从<code>1</code>开始</td></tr><tr><td>start_time</td><td>str</td><td>本周期领取开始时间</td><td>1：待领取<br>2：已领取<br>3：明日可领<br>4：已失效<br>5：可领取</td></tr><tr><td>end_time</td><td>str</td><td>本周期领取结束时间</td><td><code>同上</code></td></tr><tr><td>first</td><td>num</td><td>本周期第1天的领取状态</td><td><code>同上</code></td></tr><tr><td>second</td><td>num</td><td>本周期第2天的领取状态</td><td><code>同上</code></td></tr><tr><td>third</td><td>num</td><td>本周期第3天的领取状态</td><td><code>同上</code></td></tr><tr><td>fourth</td><td>num</td><td>本周期第4天的领取状态</td><td><code>同上</code></td></tr><tr><td>full_reward_state</td><td>num</td><td>周期全勤奖领取状态</td><td>1：不可领取<br>2:可领取<br>3：已领取</td></tr></tbody></table><p><strong>示例：</strong></p><p><code>SESSDATA</code>方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/card.v1.Card/GetUserLightCard&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>access_key</code>方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/card.v1.Card/GetUserLightCard?access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;show_state&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;expire_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-09T23:59:59+08:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;receive_amount&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token property">&quot;save_money&quot;</span><span class="token operator">:</span> <span class="token number">890</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;week&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-10T00:00:00+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-16T23:59:59+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;second&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;third&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fourth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;full_reward_state&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-17T00:00:00+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-23T23:59:59+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;second&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;third&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fourth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;full_reward_state&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-24T00:00:00+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-02T23:59:59+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;second&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;third&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fourth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;full_reward_state&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-03T00:00:00+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-09T23:59:59+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;second&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;third&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fourth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;full_reward_state&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;month_reward_state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;month_reward&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cur_month_end&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-10T00:00:00+08:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;server_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-10T10:59:43+08:00&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h1 id="领取轻享卡奖励" tabindex="-1"><a class="header-anchor" href="#领取轻享卡奖励" aria-hidden="true">#</a> 领取轻享卡奖励</h1><blockquote><p>https://manga.bilibili.com/twirp/card.v1.Card/GetLightCoupon</p></blockquote><p><em>请求方式：POST</em></p><p>是否需要登录：<code>是</code></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p>Content-Type：<code>application/json</code></p><p><strong>URL参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>必填</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td></td><td>与<code>SESSDATA</code>二选其一</td><td></td></tr></tbody></table><p><strong>正文参数（ application/json ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>必填</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>weekIndex</td><td>num</td><td>√</td><td>第几周</td><td>从<code>1</code>开始</td></tr><tr><td>type</td><td>num</td><td>√</td><td>领取类型</td><td>1：领取漫读券<br>2：领取限免卡</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>响应码</td><td>0：成功<br>3：今日已领取,请明日再来<br>3：还未满足领取条件<br>4：找不到数据~<br>6：你点击太快了哦~</td></tr><tr><td>msg</td><td>str</td><td></td><td></td></tr><tr><td>data</td><td>obj</td><td></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p><code>SESSDATA</code>方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/card.v1.Card/GetLightCoupon&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;content-type: application/json; charset=utf-8&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-raw <span class="token string">&#39;{&quot;type&quot;:1,&quot;weekIndex&quot;:1}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>access_key</code>方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/card.v1.Card/GetLightCoupon?access_key=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;content-type: application/json; charset=utf-8&#39;</span> <span class="token punctuation">\\</span>
--data-raw <span class="token string">&#39;{&quot;type&quot;:1,&quot;weekIndex&quot;:1}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,38),o=[p];function r(d,c){return n(),t("div",null,o)}const i=s(e,[["render",r],["__file","light_card.html.vue"]]);export{i as default};
