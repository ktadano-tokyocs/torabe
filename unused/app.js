const { createApp, ref, computed, onMounted, onUnmounted, watch } = Vue;

createApp({
    setup() {
        const audience = ref('parents');
        const isMobileMenuOpen = ref(false);
        const isHeaderHidden = ref(false);
        const lastScrollY = ref(0);
        const showStickyCTA = ref(false);
        const openFaqIndex = ref(null);



        // --- Parent feels ---
        const parentFeels = ref([
            '学校の授業が一律すぎて、うちの子には合っていない気がする',
            '決まった科目・時間割より、もっと自由に学ばせてあげたい',
            '少人数で、一人ひとりと向き合ってくれる場所を探している',
            '学校に行き渋っている。でも家にいるだけでは不安…'
        ]);
        const kidFeels = ref([
            { emoji: '◠', text: '<ruby>朝<rt>あさ</rt></ruby>、おきるのがつらい日がある' },
            { emoji: '✦', text: 'もっと<ruby>自分<rt>じぶん</rt></ruby>のすきなことを、やってみたい' },
            { emoji: '◌', text: 'たくさんの人がいるところ、ちょっとつかれる' },
            { emoji: '✳', text: 'ひとりじゃなくて、<ruby>話<rt>はな</rt></ruby>せる<ruby>人<rt>ひと</rt></ruby>がほしい' }
        ]);

        // --- Schedule ---
        const schedule = ref([
            { time: '8:30',  title: 'オープン',                    desc: 'ゆっくり来ても大丈夫。', icon: '☀', color: 'bg-secondary text-ink' },
            { time: '9:00',  title: '朝の会・日本語',               desc: '読む・書く・ことばの学び。', icon: '✎', color: 'bg-primary text-white' },
            { time: '12:00', title: 'ランチ＆探究',                 desc: 'みんなで食べて、好きを追いかける。', icon: '◎', color: 'bg-coral text-white' },
            { time: '15:45', title: 'ふりかえり・そうじ',           desc: '今日の学びをメモ、空間を整える。', icon: '✿', color: 'bg-sky text-white' },
            { time: '17:00', title: 'クローズ',                    desc: 'また明日ね。', icon: '☾', color: 'bg-ink text-paper' }
        ]);
        const envItems = ref([
            { icon: '📺', label: 'スマートボード' },
            { icon: '💻', label: 'iPad / MacBook' },
            { icon: '🔨', label: '工作スペース' },
            { icon: '🌿', label: '屋上エリア' }
        ]);

        // --- Features ---
        const features = ref([
            {
                num: '1', tag: 'Japanese',
                titleParent: '日本語 — 「表現する力」を一生の武器に',
                titleKid: '<ruby>日本語<rt>にほんご</rt></ruby> — ことばは、一生の<ruby>道具<rt>どうぐ</rt></ruby>',
                descParent: '学び続ける力の基盤として、読む・書く・ことばの三本柱で、個に応じたやり方で学びます。',
                descKid: '「よむ」「かく」「ことば」。<ruby>自分<rt>じぶん</rt></ruby>にあう<ruby>方法<rt>ほうほう</rt></ruby>で、すこしずつ。',
                keywords: ['読む', '書く', 'ことば'],
                badgeBg: 'bg-primary/15', badgeText: 'text-primary-deep', accentText: 'text-primary-deep'
            },
            {
                num: '2', tag: 'Inquiry',
                titleParent: '探究 — 「なぜ？」を追いかける力が育つ',
                titleKid: '<ruby>探究<rt>たんきゅう</rt></ruby> — 「なんで？」を<ruby>追<rt>お</rt></ruby>いかけよう',
                descParent: '6つの探究領域のもと、みんなで深めるテーマと、個人のマイプロジェクトが並行して動きます。',
                descKid: '「なんで？」「やってみたい！」を、みんなで、ひとりで、<ruby>深<rt>ふか</rt></ruby>めていくよ。',
                keywords: ['6つの領域', 'みんな探究', 'マイプロジェクト'],
                badgeBg: 'bg-coral/20', badgeText: 'text-coral', accentText: 'text-coral'
            },
            {
                num: '3', tag: 'Real Experience',
                titleParent: '原体験 — 本物の体験が自信をつくる',
                titleKid: '<ruby>原体験<rt>げんたいけん</rt></ruby> — ほんものに、さわる',
                descParent: '畑・川遊び・登山・乗馬・ムササビ観察・スキー。アウトドアが苦手なら無理せず参加を選べます。',
                descKid: '<ruby>畑<rt>はたけ</rt></ruby>、<ruby>川<rt>かわ</rt></ruby>、<ruby>山<rt>やま</rt></ruby>、スキー。こわかったら、<ruby>見<rt>み</rt></ruby>てるだけでもOK。',
                keywords: ['畑', '登山', '乗馬', 'スキー'],
                badgeBg: 'bg-secondary/30', badgeText: 'text-ink', accentText: 'text-secondary'
            },
            {
                num: '4', tag: 'Evaluation',
                titleParent: '個別評価 — 成績でなく「成長」で見守る',
                titleKid: 'ふりかえり — <ruby>点数<rt>てんすう</rt></ruby>じゃなく、<ruby>成長<rt>せいちょう</rt></ruby>をみる',
                descParent: '学期ごとに、お子さんの現状から将来像まで視野を広げた学びの方向性をレポートでまとめます。',
                descKid: 'がんばった<ruby>道<rt>みち</rt></ruby>を、スタッフと<ruby>一緒<rt>いっしょ</rt></ruby>にみていくよ。',
                keywords: ['保護者面談', '子ども面談', '学期レポート'],
                badgeBg: 'bg-sky/25', badgeText: 'text-ink', accentText: 'text-sky'
            }
        ]);

        // --- Staff ---
        const staff = ref([
            { name: '永易 江麻', role: 'Director', img: 'images/emachan.jpg',
              bioParent: 'TCS副理事長、東京都フリースクール等ネットワーク事務局長。小学校・幼稚園教諭免許保有。二児の母。',
              bioKid: 'とらべのリーダー。子どもが2人いるおかあさん。',
              quoteParent: '子どもたちが自分らしく学べる場所を、20年かけてつくってきました。',
              quoteKid: 'じぶんらしくいられる<ruby>場所<rt>ばしょ</rt></ruby>、いっしょに<ruby>作<rt>つく</rt></ruby>ってきたよ。' },
            { name: '稲葉 祐一朗', role: 'Master', img: 'images/inabi.jpg',
              bioParent: 'カナダ留学後、デンマークのフォルケホイスコーレで「対話」中心の学びに魅せられる。栃木でフリースクール設立経験。',
              bioKid: 'カナダとデンマークで、たくさん「<ruby>対話<rt>たいわ</rt></ruby>」を<ruby>学<rt>まな</rt></ruby>んだ人。',
              quoteParent: '子どもの「なんで？」に、一緒に向き合いたい。',
              quoteKid: 'きみの「なんで？」、いっしょに<ruby>考<rt>かんが</rt></ruby>えよう。' },
            { name: '大知里 由', role: 'Anchor', img: 'images/yuyu.jpg',
              bioParent: '芸術畑出身で、アートセラピーや心理学を学ぶ。とらべを温かく包み込む母的な存在。',
              bioKid: 'アートと<ruby>心<rt>こころ</rt></ruby>のこと、くわしい人。',
              quoteParent: 'どんな状態で来てくれても、まず「よく来てくれたね」と伝えたい。',
              quoteKid: 'どんな<ruby>日<rt>ひ</rt></ruby>でも、「よく<ruby>来<rt>き</rt></ruby>てくれたね」って<ruby>伝<rt>つた</rt></ruby>えたい。' }
        ]);

        // --- Testimonials ---
        const testimonials = ref([
            { bg: 'bg-white', text: '公立校では物足りないと感じていた子が、ここで生き生きし始めました。マイプロジェクトを通じて「自分で学ぶ」ことを本当に楽しんでいます。',
              who: '小3男子の保護者', context: '在籍1年目 ／ オルタナ教育を探して入学' },
            { bg: 'bg-white', text: '先生方が子どもの話をじっくり聞いてくださる。成績ではなく成長で見てくださる個別評価が、うちの子に本当に合っていました。',
              who: '小5女子の保護者', context: '在籍2年目 ／ 一律評価に疑問を感じて入学' },
            { bg: 'bg-white', text: '学校に行けなくて悩んでいたとき、見学で「合うかを一緒に考えましょう」と言われて救われました。押し付けがなくて、安心して通わせています。',
              who: '小2男子の保護者', context: '在籍半年 ／ 不登校がきっかけで入学' }
        ]);

        // --- FAQ ---
        const parentFaqs = ref([
            { q: '普通の学校との一番の違いは何ですか？', a: '一律カリキュラムではなく、子ども一人ひとりの興味・ペースに合わせた学びを実践しています。時間割は固定せず、マイプロジェクトなど自分で選ぶ活動が多くあります。少人数だからこそ、スタッフが毎日きめ細かく子どもの状態を見ることができます。' },
            { q: '学校に籍を置いたまま通えますか？', a: 'はい、可能です。多くのご家庭が公立小学校に在籍したまま、とらべに通っています。出席扱いについては学校側との相談が必要になる場合がありますが、手続きのご相談にも応じています。' },
            { q: '学力・進路への影響が心配です。', a: '日本語（読む・書く・語彙）を学びの基盤として重視しており、学力を軽視しているわけではありません。学期ごとの個別評価レポートと面談を通じて、お子さんの学びの方向性を保護者と一緒に考えます。' },
            { q: '少人数すぎて社会性が育つか不安です。', a: '少人数だからこそ、異なる年齢・個性の子どもたちと深く関わる機会が生まれます。探究活動やアウトドアイベント、地域との交流を通じて、対話・協力・意見の違いを尊重する力が育まれます。' },
            { q: '見学は何度でも来られますか？', a: 'はい、納得いただくまで何度でもお越しください。「もう一度子どもを連れてきたい」というご要望にも柔軟に対応しています。' },
            { q: '助成金の申請は自分でやらないといけないですか？', a: '基本的には保護者にご申請いただきますが、申請方法や必要書類についてスタッフがサポートします。入学後の説明会でも詳しくご案内しています。' }
        ]);
        const kidFaqs = ref([
            { q: '<ruby>勉強<rt>べんきょう</rt></ruby>、<ruby>苦手<rt>にがて</rt></ruby>でもだいじょうぶ？', a: 'だいじょうぶ。きみのペースで、すこしずつやっていこう。スタッフが<ruby>横<rt>よこ</rt></ruby>にいて、いっしょに<ruby>考<rt>かんが</rt></ruby>えるよ。' },
            { q: 'ともだちが、できるかな？', a: 'いま<ruby>通<rt>かよ</rt></ruby>ってる子も、みんなさいしょはドキドキしてた。すこしずつで、だいじょうぶ。ひとりでいたい<ruby>日<rt>ひ</rt></ruby>も、OK。' },
            { q: 'やりたくない<ruby>日<rt>ひ</rt></ruby>は、<ruby>休<rt>やす</rt></ruby>めるの？', a: 'うん、<ruby>休<rt>やす</rt></ruby>んでもいい。「<ruby>止<rt>と</rt></ruby>まる」のも、とらべの<ruby>大<rt>たい</rt></ruby><ruby>事<rt>じ</rt></ruby>にしてることだよ。' },
            { q: 'ゲームやマンガは、もってきていい？', a: '<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って<ruby>決<rt>き</rt></ruby>めるよ。みんなの<ruby>時間<rt>じかん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしながら、<ruby>自分<rt>じぶん</rt></ruby>のすきもちゃんとある、そんな<ruby>場所<rt>ばしょ</rt></ruby>。' },
            { q: '<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってないけど、<ruby>通<rt>かよ</rt></ruby>える？', a: 'もちろん。<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってない<ruby>子<rt>こ</rt></ruby>も、<ruby>通<rt>かよ</rt></ruby>ってる<ruby>子<rt>こ</rt></ruby>もいるよ。まずは<ruby>見学<rt>けんがく</rt></ruby>で、あそびにきてね。' }
        ]);
        const currentFaqs = computed(() => audience.value === 'kids' ? kidFaqs.value : parentFaqs.value);

        const toggleFaq = (index) => { openFaqIndex.value = openFaqIndex.value === index ? null : index; };

        // --- Audience ---
        const setAudience = (a) => {
            audience.value = a;
            document.body.setAttribute('data-audience', a);
            openFaqIndex.value = null;
        };

        // --- Scroll ---
        const handleScroll = () => {
            const y = window.scrollY;
            showStickyCTA.value = y > 500;
            if (isMobileMenuOpen.value) { isHeaderHidden.value = false; lastScrollY.value = y; return; }
            if (y < 80) { isHeaderHidden.value = false; }
            else {
                const delta = y - lastScrollY.value;
                if (delta > 8) isHeaderHidden.value = true;
                else if (delta < -8) isHeaderHidden.value = false;
            }
            lastScrollY.value = y;
        };

        const scrollTo = (id) => {
            isMobileMenuOpen.value = false;
            const el = document.getElementById(id);
            if (el) {
                const offset = 72;
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        };

        onMounted(() => {
            lastScrollY.value = window.scrollY;
            window.addEventListener('scroll', handleScroll, { passive: true });
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            document.querySelectorAll('.fade-in-section').forEach(el => obs.observe(el));
        });
        onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });

        return {
            audience, setAudience,
            isMobileMenuOpen, isHeaderHidden, showStickyCTA,
            parentFeels, kidFeels,
            schedule, envItems,
            features, staff, testimonials,
            currentFaqs, openFaqIndex, toggleFaq,
            scrollTo
        };
    }
}).mount('#app');
