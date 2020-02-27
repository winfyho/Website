<template>

    <div class="mume markdown-preview  ">
        <h1 class="mume-header"
            id="es6%E4%B8%80let%E5%92%8Cconst-%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F-%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC">
            ES6&#xFF08;&#x4E00;&#xFF09;&#xFF1A;let&#x548C;const&#x3001;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x3001;&#x89E3;&#x6784;&#x8D4B;&#x503C;
        </h1>

        <p>&#x63A8;&#x8350;&#x5B66;&#x4E60; <a href="https://es6.ruanyifeng.com/">ECMAScript 6 &#x5165;&#x95E8; |
                &#x4F5C;&#x8005;&#xFF1A;&#x962E;&#x4E00;&#x5CF0;</a><br>
            &#x5730;&#x5740;&#xFF1A;<a href="https://es6.ruanyifeng.com/">https://es6.ruanyifeng.com/</a></p>
        <h2 class="mume-header" id="1-let%E5%91%BD%E4%BB%A4">1. let&#x547D;&#x4EE4;</h2>

        <h3 class="mume-header" id="11-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">1.1 &#x57FA;&#x672C;&#x7528;&#x6CD5;</h3>

        <p>ES6
            &#x65B0;&#x589E;&#x4E86;<code>let</code>&#x547D;&#x4EE4;&#xFF0C;&#x7528;&#x6765;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#x3002;&#x5B83;&#x7684;&#x7528;&#x6CD5;&#x7C7B;&#x4F3C;&#x4E8E;var&#xFF0C;&#x4F46;&#x662F;&#x6240;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#xFF0C;&#x53EA;&#x5728;<code>let</code>&#x547D;&#x4EE4;&#x6240;&#x5728;&#x7684;&#x4EE3;&#x7801;&#x5757;&#x5185;&#x6709;&#x6548;<br>
            for&#x5FAA;&#x73AF;&#x7684;&#x8BA1;&#x6570;&#x5668;&#xFF0C;&#x5C31;&#x5F88;&#x5408;&#x9002;&#x4F7F;&#x7528;<code>let</code>&#x547D;&#x4EE4;&#x3002;
        </p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
          </pre>
        <p>&#x5982;&#x679C;&#x4F7F;&#x7528;let&#xFF0C;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x4EC5;&#x5728;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x6709;&#x6548;&#xFF0C;&#x6700;&#x540E;&#x8F93;&#x51FA;&#x7684;&#x662F;
            6</p>
        <h3 class="mume-header" id="12-%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87">1.2
            &#x4E0D;&#x5B58;&#x5728;&#x53D8;&#x91CF;&#x63D0;&#x5347;</h3>

        <p><code>var</code>&#x547D;&#x4EE4;&#x4F1A;&#x53D1;&#x751F;&#x201C;&#x53D8;&#x91CF;&#x63D0;&#x5347;&#x201D;&#x73B0;&#x8C61;&#xFF0C;&#x5373;&#x53D8;&#x91CF;&#x53EF;&#x4EE5;&#x5728;&#x58F0;&#x660E;&#x4E4B;&#x524D;&#x4F7F;&#x7528;<br>
            <code>let</code>&#x547D;&#x4EE4;&#x6539;&#x53D8;&#x4E86;&#x8BED;&#x6CD5;&#x884C;&#x4E3A;&#xFF0C;&#x5B83;&#x6240;&#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x4E00;&#x5B9A;&#x8981;&#x5728;&#x58F0;&#x660E;&#x540E;&#x4F7F;&#x7528;&#xFF0C;&#x5426;&#x5219;&#x62A5;&#x9519;&#x3002;
        </p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token comment">// var &#x7684;&#x60C5;&#x51B5;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#x8F93;&#x51FA;undefined</span>
          <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
          
          <span class="token comment">// let &#x7684;&#x60C5;&#x51B5;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#x62A5;&#x9519;ReferenceError</span>
          <span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
          </pre>
        <h3 class="mume-header" id="13-%E4%B8%8D%E5%85%81%E8%AE%B8%E9%87%8D%E5%A4%8D%E5%A3%B0%E6%98%8E">1.3
            &#x4E0D;&#x5141;&#x8BB8;&#x91CD;&#x590D;&#x58F0;&#x660E;</h3>

        <p><code>let</code>&#x4E0D;&#x5141;&#x8BB8;&#x5728;&#x76F8;&#x540C;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#xFF0C;&#x91CD;&#x590D;&#x58F0;&#x660E;&#x540C;&#x4E00;&#x4E2A;&#x53D8;&#x91CF;
        </p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token comment">// &#x62A5;&#x9519;</span>
          <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          </pre>
        <p>&#x4E0D;&#x80FD;&#x5728;&#x51FD;&#x6570;&#x5185;&#x90E8;&#x91CD;&#x65B0;&#x58F0;&#x660E;&#x53C2;&#x6570;</p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> arg<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#x62A5;&#x9519;</span>
          </pre>
        <h2 class="mume-header" id="2-const">2. const</h2>

        <h3 class="mume-header" id="21-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">2.1 &#x57FA;&#x672C;&#x7528;&#x6CD5;</h3>

        <p><code>const</code>&#x58F0;&#x660E;&#x4E00;&#x4E2A;&#x53EA;&#x8BFB;&#x7684;&#x5E38;&#x91CF;&#x3002;&#x4E00;&#x65E6;&#x58F0;&#x660E;&#xFF0C;&#x5E38;&#x91CF;&#x7684;&#x503C;&#x5C31;&#x4E0D;&#x80FD;&#x6539;&#x53D8;<br>
            &#x4E00;&#x65E6;&#x58F0;&#x660E;&#x53D8;&#x91CF;&#xFF0C;&#x5C31;&#x5FC5;&#x987B;&#x7ACB;&#x5373;&#x521D;&#x59CB;&#x5316;&#xFF0C;&#x4E0D;&#x80FD;&#x7559;&#x5230;&#x4EE5;&#x540E;&#x8D4B;&#x503C;,&#x4E5F;&#x4E0E;let&#x4E00;&#x6837;&#x4E0D;&#x53EF;&#x91CD;&#x590D;&#x58F0;&#x660E;&#x3002;
        </p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415</span><span class="token punctuation">;</span>
          <span class="token constant">PI</span> <span class="token comment">// 3.1415</span>
          
          <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
          <span class="token comment">// TypeError: Assignment to constant variable.</span>
          </pre>
        <p><code>const</code>&#x7684;&#x4F5C;&#x7528;&#x57DF;&#x4E0E;<code>let</code>&#x547D;&#x4EE4;&#x76F8;&#x540C;&#xFF1A;&#x53EA;&#x5728;&#x58F0;&#x660E;&#x6240;&#x5728;&#x7684;&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;&#x5185;&#x6709;&#x6548;.
        </p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token constant">MAX</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          
          <span class="token constant">MAX</span> <span class="token comment">// Uncaught ReferenceError: MAX is not defined</span>
          </pre>
        <h3 class="mume-header" id="22-%E6%9C%AC%E8%B4%A8">2.2 &#x672C;&#x8D28;</h3>

        <p><code>const</code>&#x5B9E;&#x9645;&#x4E0A;&#x4FDD;&#x8BC1;&#x662F;&#x53D8;&#x91CF;&#x6307;&#x5411;&#x7684;&#x90A3;&#x4E2A;&#x5185;&#x5B58;&#x5730;&#x5740;&#x6240;&#x4FDD;&#x5B58;&#x7684;&#x6570;&#x636E;&#x4E0D;&#x5F97;&#x6539;&#x52A8;&#x3002;&#x5BF9;&#x4E8E;&#x7B80;&#x5355;&#x7C7B;&#x578B;&#x7684;&#x6570;&#x636E;&#xFF08;&#x6570;&#x503C;&#x3001;&#x5B57;&#x7B26;&#x4E32;&#x3001;&#x5E03;&#x5C14;&#x503C;&#xFF09;&#xFF0C;&#x503C;&#x5C31;&#x4FDD;&#x5B58;&#x5728;&#x53D8;&#x91CF;&#x6307;&#x5411;&#x7684;&#x90A3;&#x4E2A;&#x5185;&#x5B58;&#x5730;&#x5740;&#xFF0C;&#x56E0;&#x6B64;&#x7B49;&#x540C;&#x4E8E;&#x5E38;&#x91CF;&#x3002;&#x4F46;&#x5BF9;&#x4E8E;&#x590D;&#x5408;&#x7C7B;&#x578B;&#x7684;&#x6570;&#x636E;&#xFF08;&#x4E3B;&#x8981;&#x662F;&#x5BF9;&#x8C61;&#x548C;&#x6570;&#x7EC4;&#xFF09;&#xFF0C;&#x53D8;&#x91CF;&#x6307;&#x5411;&#x7684;&#x5185;&#x5B58;&#x5730;&#x5740;&#xFF0C;&#x4FDD;&#x5B58;&#x7684;&#x53EA;&#x662F;&#x4E00;&#x4E2A;&#x6307;&#x5411;&#x5B9E;&#x9645;&#x6570;&#x636E;&#x7684;&#x6307;&#x9488;&#xFF0C;<code>const</code>&#x53EA;&#x80FD;&#x4FDD;&#x8BC1;&#x8FD9;&#x4E2A;&#x6307;&#x9488;&#x662F;&#x56FA;&#x5B9A;&#x7684;&#xFF08;&#x5373;&#x603B;&#x662F;&#x6307;&#x5411;&#x53E6;&#x4E00;&#x4E2A;&#x56FA;&#x5B9A;&#x7684;&#x5730;&#x5740;&#xFF09;&#xFF0C;&#x81F3;&#x4E8E;&#x5B83;&#x6307;&#x5411;&#x7684;&#x6570;&#x636E;&#x7ED3;&#x6784;&#x662F;&#x4E0D;&#x662F;&#x53EF;&#x53D8;&#x7684;&#xFF0C;&#x5C31;&#x5B8C;&#x5168;&#x4E0D;&#x80FD;&#x63A7;&#x5236;&#x4E86;&#x3002;&#x56E0;&#x6B64;&#xFF0C;&#x5C06;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#x58F0;&#x660E;&#x4E3A;&#x5E38;&#x91CF;&#x5FC5;&#x987B;&#x975E;&#x5E38;&#x5C0F;&#x5FC3;&#x3002;
        </p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
          
          <span class="token comment">// &#x4E3A; foo &#x6DFB;&#x52A0;&#x4E00;&#x4E2A;&#x5C5E;&#x6027;&#xFF0C;&#x53EF;&#x4EE5;&#x6210;&#x529F;</span>
          foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
          foo<span class="token punctuation">.</span>prop <span class="token comment">// 123</span>
          
          <span class="token comment">// &#x5C06; foo &#x6307;&#x5411;&#x53E6;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5C31;&#x4F1A;&#x62A5;&#x9519;</span>
          foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
          </pre>
        <h2 class="mume-header" id="3%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F">
            3.&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;</h2>

        <ul>
            <li><code>var</code>
                &#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x662F;<code>&#x51FD;&#x6570;&#x7EA7;&#x522B;&#x4F5C;&#x7528;&#x57DF;</code>&#xFF0C;&#x4E14;&#x5B58;&#x5728;&#x53D8;&#x91CF;&#x63D0;&#x5347;&#xFF0C;&#x56E0;&#x6B64;&#x5728;&#x89E3;&#x51B3;&#x95ED;&#x5305;&#x95EE;&#x9898;&#x9700;&#x8981;&#x4F7F;&#x7528;&#x533F;&#x540D;&#x51FD;&#x6570;&#x5305;&#x88F9;
            </li>
            <li><code>let/const</code>
                &#x58F0;&#x660E;&#x7684;&#x53D8;&#x91CF;&#x662F;<code>&#x5757;&#x7EA7;&#x4F5C;&#x7528;&#x57DF;{}</code>&#xFF0C;&#x4E0D;&#x5B58;&#x5728;&#x53D8;&#x91CF;&#x63D0;&#x5347;&#xFF0C;&#x53EA;&#x5728;let&#x547D;&#x4EE4;&#x6240;&#x5728;&#x7684;&#x4EE3;&#x7801;&#x5757;&#x5185;&#x6709;&#x6548;&#x3002;&#x6BD4;&#x5982;&#x5728;for&#x5FAA;&#x73AF;&#x4E2D;&#x89E3;&#x51B3;&#x95ED;&#x5305;&#x95EE;&#x9898;
            </li>
        </ul>
        <p>&#x56E0;&#x6B64;&#x53EF;&#x4EE5;&#x4F7F;&#x7528;let&#x548C;const&#x5B8C;&#x5168;&#x53D6;&#x4EE3;var</p>
        <h2 class="mume-header" id="4%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC">4.&#x89E3;&#x6784;&#x8D4B;&#x503C;</h2>

        <h3 class="mume-header" id="41%E6%95%B0%E7%BB%84%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC">
            4.1&#x6570;&#x7EC4;&#x89E3;&#x6784;&#x8D4B;&#x503C;</h3>

        <p>ES5&#x5199;&#x6CD5;</p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
          </pre>
        <p>ES6&#x5199;&#x6CD5;</p>
        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          </pre>
        <p>&#x4E0A;&#x9762;&#x4EE3;&#x7801;&#x8868;&#x793A;&#xFF0C;&#x53EF;&#x4EE5;&#x4ECE;&#x6570;&#x7EC4;&#x4E2D;&#x63D0;&#x53D6;&#x503C;&#xFF0C;&#x6309;&#x7167;&#x5BF9;&#x5E94;&#x4F4D;&#x7F6E;&#xFF0C;&#x5BF9;&#x53D8;&#x91CF;&#x8D4B;&#x503C;&#x3002;<br>
            &#x672C;&#x8D28;&#x4E0A;&#xFF0C;&#x8FD9;&#x79CD;&#x5199;&#x6CD5;&#x5C5E;&#x4E8E;&#x201C;&#x6A21;&#x5F0F;&#x5339;&#x914D;&#x201D;&#xFF0C;&#x53EA;&#x8981;&#x7B49;&#x53F7;&#x4E24;&#x8FB9;&#x7684;&#x6A21;&#x5F0F;&#x76F8;&#x540C;&#xFF0C;&#x5DE6;&#x8FB9;&#x7684;&#x53D8;&#x91CF;&#x5C31;&#x4F1A;&#x88AB;&#x8D4B;&#x4E88;&#x5BF9;&#x5E94;&#x7684;&#x503C;&#x3002;
        </p>
        <h3 class="mume-header" id="42%E5%AF%B9%E8%B1%A1%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC">
            4.2&#x5BF9;&#x8C61;&#x89E3;&#x6784;&#x8D4B;&#x503C;</h3>

        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">let</span> <span class="token punctuation">{</span> bar<span class="token punctuation">,</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">&apos;aaa&apos;</span><span class="token punctuation">,</span> bar<span class="token punctuation">:</span> <span class="token string">&apos;bbb&apos;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
          foo <span class="token comment">// &quot;aaa&quot;</span>
          bar <span class="token comment">// &quot;bbb&quot;</span>
          </pre>
        <p>&#x5BF9;&#x8C61;&#x7684;&#x89E3;&#x6784;&#x4E0E;&#x6570;&#x7EC4;&#x6709;&#x4E00;&#x4E2A;&#x91CD;&#x8981;&#x7684;&#x4E0D;&#x540C;&#x3002;&#x6570;&#x7EC4;&#x7684;&#x5143;&#x7D20;&#x662F;&#x6309;&#x6B21;&#x5E8F;&#x6392;&#x5217;&#x7684;&#xFF0C;&#x53D8;&#x91CF;&#x7684;&#x53D6;&#x503C;&#x7531;&#x5B83;&#x7684;&#x4F4D;&#x7F6E;&#x51B3;&#x5B9A;&#xFF1B;&#x800C;<strong>&#x5BF9;&#x8C61;&#x7684;&#x5C5E;&#x6027;&#x6CA1;&#x6709;&#x6B21;&#x5E8F;&#xFF0C;&#x53D8;&#x91CF;&#x5FC5;&#x987B;&#x4E0E;&#x5C5E;&#x6027;&#x540C;&#x540D;</strong>&#xFF0C;&#x624D;&#x80FD;&#x53D6;&#x5230;&#x6B63;&#x786E;&#x7684;&#x503C;&#x3002;
        </p>
        <h3 class="mume-header" id="43%E7%94%A8%E9%80%94">4.3&#x7528;&#x9014;</h3>

        <h4 class="mume-header" id="1%E4%BA%A4%E6%8D%A2%E5%8F%98%E9%87%8F%E7%9A%84%E5%80%BC">
            &#xFF08;1&#xFF09;&#x4EA4;&#x6362;&#x53D8;&#x91CF;&#x7684;&#x503C;</h4>

        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
          
          <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>
          </pre>
        <h4 class="mume-header" id="2%E4%BB%8E%E5%87%BD%E6%95%B0%E8%BF%94%E5%9B%9E%E5%A4%9A%E4%B8%AA%E5%80%BC">
            &#xFF08;2&#xFF09;&#x4ECE;&#x51FD;&#x6570;&#x8FD4;&#x56DE;&#x591A;&#x4E2A;&#x503C;</h4>

        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token comment">// &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x6570;&#x7EC4;</span>
          <span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          
          <span class="token comment">// &#x8FD4;&#x56DE;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;</span>
          <span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
              foo<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              bar<span class="token punctuation">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">let</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          </pre>
        <h4 class="mume-header" id="3%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89">
            &#xFF08;3&#xFF09;&#x51FD;&#x6570;&#x53C2;&#x6570;&#x7684;&#x5B9A;&#x4E49;</h4>

        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token comment">// &#x53C2;&#x6570;&#x662F;&#x4E00;&#x7EC4;&#x65E0;&#x6B21;&#x5E8F;&#x7684;&#x503C;</span>
          <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
          <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">{</span>z<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          </pre>
        <h4 class="mume-header" id="4%E6%8F%90%E5%8F%96-json-%E6%95%B0%E6%8D%AE">&#xFF08;4&#xFF09;&#x63D0;&#x53D6; JSON
            &#x6570;&#x636E;</h4>

        <pre data-role="codeBlock" data-info="js" class="language-javascript"><span class="token keyword">let</span> jsonData <span class="token operator">=</span> <span class="token punctuation">{</span>
            id<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
            status<span class="token punctuation">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
            data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">867</span><span class="token punctuation">,</span> <span class="token number">5309</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
          
          <span class="token keyword">let</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> status<span class="token punctuation">,</span> data<span class="token punctuation">:</span> number <span class="token punctuation">}</span> <span class="token operator">=</span> jsonData<span class="token punctuation">;</span>
          
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> status<span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 42, &quot;OK&quot;, [867, 5309]</span>
          </pre>
        <h4 class="mume-header" id></h4>


    </div>
</template>
<script>
    export default {
        name: "markdown",
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../css/markdown.css";
</style>