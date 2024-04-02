import{_ as s,o as n,c as t,e as a}from"./app-482cf959.js";const e={},o=a(`<h1 id="弹幕点赞查询" tabindex="-1"><a class="header-anchor" href="#弹幕点赞查询" aria-hidden="true">#</a> 弹幕点赞查询</h1><h2 id="查询指定dmid的点赞数" tabindex="-1"><a class="header-anchor" href="#查询指定dmid的点赞数" aria-hidden="true">#</a> 查询指定dmid的点赞数</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/thumbup/stats</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>oid</td><td>num</td><td>视频 cid</td><td>必要</td><td></td></tr><tr><td>ids</td><td>nums</td><td>欲查询的弹幕 dmid</td><td>必要</td><td>多个 id 之间用<code>,</code>分隔</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>弹幕 id 与之对应数据的 Map</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>{弹幕 dmid}</td><td>obj</td><td>{弹幕 dmid} 对应的点赞信息</td><td></td></tr></tbody></table><p><code>{弹幕 dmid}</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>likes</td><td>num</td><td>对应弹幕所获得的点赞数</td><td></td></tr><tr><td>user_like</td><td>num</td><td>当前用户是否点赞</td><td>0：未点赞<br>1：已点赞<br>需要登录（Cookie 或 APP）</td></tr><tr><td>id_str</td><td>str</td><td>弹幕 dmid 字符串形式</td><td></td></tr><tr><td>show_threshold</td><td>num</td><td>（？）</td><td></td></tr><tr><td>reply_count</td><td>num</td><td>（？）</td><td></td></tr><tr><td>gray_release_control</td><td>obj</td><td>（？）</td><td></td></tr></tbody></table><p><code>gray_release_control</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>show_dm_reply</td><td>bool</td><td>（？）</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取视频 BV1AP411d7Qa 1P（cid=1131648710）下的几个弹幕 dmid<code>1318231376180646144,1318231518484950784,1318231736680887808</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/thumbup/stats&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;oid=1131648710&#39;</span> <span class="token punctuation">\\</span>
	--data-urlencode <span class="token string">&#39;ids=1318231376180646144,1318231518484950784,1318231736680887808&#39;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;1318231376180646144&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_like&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id_str&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1318231376180646144&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;show_threshold&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;reply_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;gray_release_control&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;show_dm_reply&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1318231518484950784&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_like&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id_str&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1318231518484950784&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;show_threshold&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;reply_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;gray_release_control&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;show_dm_reply&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;1318231736680887808&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_like&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id_str&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1318231736680887808&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;show_threshold&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;reply_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;gray_release_control&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;show_dm_reply&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,19),p=[o];function d(r,l){return n(),t("div",null,p)}const i=s(e,[["render",d],["__file","thumbup.html.vue"]]);export{i as default};
