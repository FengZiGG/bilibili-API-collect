import{_ as o,r as c,o as p,c as l,a,b as n,d as t,e as s}from"./app-482cf959.js";const d={},i=s('<h1 id="设备各类标识算法-app-端" tabindex="-1"><a class="header-anchor" href="#设备各类标识算法-app-端" aria-hidden="true">#</a> 设备各类标识算法(APP 端)</h1><h2 id="设备唯一标识-buvid" tabindex="-1"><a class="header-anchor" href="#设备唯一标识-buvid" aria-hidden="true">#</a> 设备唯一标识 BUVID</h2><p>注意区分于 Web 端的 buvid3, buvid4.</p><p>BUVID 在 APP 首次安装于某设备, 且首次启动时生成.</p><p>APP 首次(即每次安装后)启动, 会向云端发送本机各类设备特征, 含 <code>AndroidId</code>, <code>DrmId</code> 等, 请求是否有匹配的 BUVID, 有就使用云端的, 否则使用本地生成的.</p><p>APP 请求是否有匹配的 BUVID 发送的本机各类设备特征包括(但不限于):</p><ul><li><code>AndroidID</code></li><li><code>DrmId</code></li><li><code>IMEI</code></li><li><code>OAID</code></li><li>手机网卡 <code>MAC</code></li><li>设备品牌</li><li>设备 Model</li><li>本地生成的 BUVID</li></ul><h3 id="生成方法" tabindex="-1"><a class="header-anchor" href="#生成方法" aria-hidden="true">#</a> 生成方法</h3><ol><li><p>选定设备特征码, 可以是 <code>AndroidID</code>, <code>DrmId</code>, 手机网卡 <code>MAC</code> 等. 记为 <code>ID</code>. 特别地, <code>MAC</code> 应当去掉 <code>:</code>, <code>GUID</code>(即 UUID) 应当去掉 <code>-</code>.</p></li><li><p>计算 <code>ID</code> 的 MD5. 记为 <code>ID_MD5</code>.</p></li><li><p>从 <code>ID_MD5</code> 抽取第 3, 13, 23 位, 失败就默认为 000, 记为 <code>ID_E</code>.</p></li><li><p>根据选定的设备特征码类型确定 BUVID Prefix, 见附录. 记为 <code>BUVID_Prefix</code>.</p></li><li><p>按 <code>{BUVID_Prefix}{ID_E}{ID_MD5}</code> 的顺序连接起来, 共37位(2+3+32). 结果应当为大写.</p></li></ol><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3><h4 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h4>',11),r={href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=40b5906cf3838a60efa83fa368b15147",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="设备指纹-fp-fp-local-fp-remote" tabindex="-1"><a class="header-anchor" href="#设备指纹-fp-fp-local-fp-remote" aria-hidden="true">#</a> 设备指纹 fp (fp_local, fp_remote)</h2><p>用于请求账户相关 REST API, 及 gRPC Metadata 生成.</p><p>在请求头中, <code>fp_local</code> 和 <code>fp_remote</code> 设置为同一值即可, 暂不清楚区别.</p><h3 id="生成方法-1" tabindex="-1"><a class="header-anchor" href="#生成方法-1" aria-hidden="true">#</a> 生成方法</h3><ol><li><p>获取 BUVID. 此处一般使用 XU Prefix 的 BUVID.</p></li><li><p>获取设备 Model(<code>Build.MODEL</code>), 如 <code>NOH-AN01</code>.</p></li><li><p>获取手机无线电固件版本号(<code>Build.getRadioVersion()</code>), 失败则留空. 如 <code>21C20B686S000C000,21C20B686S000C000</code>.</p></li><li><p>按前述顺序拼接字符串, 计算得 MD5.</p></li><li><p>获取年月日, 格式 <code>yyyyMMddhhmmss</code>, 拼接到 4 得到的字符串后.</p></li><li><p>生成 16 位随机字符串, CharSet 为 <code>0123456789abcdef</code>, 拼接到 5 得到的字符串后, 记为 <code>fp_raw</code>.</p></li><li><p>计算得到一个特殊字符串, 拼接到 <code>fp_raw</code> 后, 即得到最终的 <code>fp</code>, 特殊字符串算法见下:</p></li></ol><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> veri_code <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// 有点像 HEX 的操作</span>
<span class="token keyword">let</span> fp_raw_sub_str <span class="token operator">=</span> fp_raw
    <span class="token punctuation">.</span><span class="token function">as_bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 将字符串 fp_raw 转换为字节数组</span>
    <span class="token punctuation">.</span><span class="token function">chunks</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 按每两个字节一组进行切分</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>s<span class="token closure-punctuation punctuation">|</span></span> <span class="token keyword">unsafe</span> <span class="token punctuation">{</span> <span class="token punctuation">::</span><span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">str</span><span class="token punctuation">::</span><span class="token function">from_utf8_unchecked</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 对每一组解析作为 UTF-8 字符串</span>
    <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span>_<span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将结果收集到 Vec 中</span>
<span class="token comment">// 如果 fp_raw 的长度小于 62, 则向下取偶数减半作为循环终止条件, 否则终止条件为31</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> fp_raw<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">62</span> <span class="token punctuation">{</span>
        fp_raw<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> fp_raw<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token comment">// 取偶数</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token number">62</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 将每组字符串转换为对应的 16 进制整数, 将转换得到的整数加到 veri_code 上. </span>
    veri_code <span class="token operator">+=</span> <span class="token keyword">i32</span><span class="token punctuation">::</span><span class="token function">from_str_radix</span><span class="token punctuation">(</span>fp_raw_sub_str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap_or</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 最后将 veri_code 对 256 取余, 格式化为两位的 16 进制字符串</span>
<span class="token keyword">let</span> veri_code <span class="token operator">=</span> <span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">&quot;{:0&gt;2x}&quot;</span><span class="token punctuation">,</span> veri_code <span class="token operator">%</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1" aria-hidden="true">#</a> Demo</h3><h4 id="rust-1" tabindex="-1"><a class="header-anchor" href="#rust-1" aria-hidden="true">#</a> Rust</h4>`,8),k={href:"https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=40b5906cf3838a60efa83fa368b15147",target:"_blank",rel:"noopener noreferrer"},h=s('<h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h2><h3 id="buvid-prefix" tabindex="-1"><a class="header-anchor" href="#buvid-prefix" aria-hidden="true">#</a> BUVID Prefix</h3><table><thead><tr><th style="text-align:center;">设备特征码</th><th style="text-align:center;">BUVID Prefix</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>AndroidID</code></td><td style="text-align:center;"><code>XX</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>DrmId</code></td><td style="text-align:center;"><code>XU</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>IMEI</code></td><td style="text-align:center;"><code>XZ</code></td><td style="text-align:center;">已弃用</td></tr><tr><td style="text-align:center;"><code>GUID</code></td><td style="text-align:center;"><code>XW</code></td><td style="text-align:center;">已弃用</td></tr><tr><td style="text-align:center;"><code>MAC</code></td><td style="text-align:center;"><code>XY</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>GoogleId</code></td><td style="text-align:center;"><code>XG</code></td><td style="text-align:center;">东南亚版本</td></tr><tr><td style="text-align:center;"><code>FacebookId</code></td><td style="text-align:center;"><code>XF</code></td><td style="text-align:center;">东南亚版本</td></tr></tbody></table>',3);function m(f,b){const e=c("ExternalLinkIcon");return p(),l("div",null,[i,a("p",null,[n("代码及测试样例见 "),a("a",r,[n("Rust Playground"),t(e)]),n(".")]),u,a("p",null,[n("代码及测试样例见 "),a("a",k,[n("Rust Playground"),t(e)]),n(".")]),h])}const v=o(d,[["render",m],["__file","device_identity.html.vue"]]);export{v as default};
