import { Card } from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';

type StoryItem = {
  title: string;
  titleAr: string;
  story: string;
  storyAr: string;
  wisdom: string;
  wisdomAr: string;
};

const stories: StoryItem[] = [
  {
    title: 'The Spider Web in the Cave',
    titleAr: 'خيوط العنكبوت في الغار',
    story:
      'During the Hijrah, the Prophet ﷺ and Abu Bakr hid in the cave of Thawr. Allah protected them, and the pursuers turned away.',
    storyAr:
      'أثناء الهجرة، اختبأ النبي ﷺ وأبو بكر في غار ثور، فحفظهما الله وصرف عنهما المطاردين.',
    wisdom: 'Tawakkul is not passive; we take means and trust Allah with certainty.',
    wisdomAr: 'التوكل ليس تواكلًا؛ نأخذ بالأسباب ونثق بالله يقينًا.',
  },
  {
    title: 'Yusuf in the Well and the Palace',
    titleAr: 'يوسف بين الجب والقصر',
    story:
      'Prophet Yusuf عليه السلام faced betrayal, prison, and hardship, then Allah raised him to honor and leadership.',
    storyAr:
      'مرّ يوسف عليه السلام بالخيانة والسجن والابتلاء، ثم رفعه الله إلى العزة والتمكين.',
    wisdom: 'Patience with faith turns trials into doors of mercy and growth.',
    wisdomAr: 'الصبر مع الإيمان يحوّل الابتلاء إلى أبواب رحمة ونماء.',
  },
  {
    title: 'The Boy and the King',
    titleAr: 'الغلام والملك',
    story:
      'A believing boy taught people steadfast faith despite oppression, and truth spread through his sincerity.',
    storyAr:
      'علّم غلام مؤمن الناس الثبات على الإيمان رغم الظلم، فانتشر الحق بصدقه.',
    wisdom: 'Sincerity for Allah gives small actions great impact.',
    wisdomAr: 'الإخلاص لله يجعل العمل الصغير عظيم الأثر.',
  },
  {
    title: 'Musa and Al-Khidr',
    titleAr: 'موسى والخضر',
    story:
      'Prophet Musa عليه السلام learned that Allah’s wisdom can be hidden behind events we do not understand at first.',
    storyAr:
      'تعلّم موسى عليه السلام أن حكمة الله قد تخفى خلف أحداث لا نفهمها في البداية.',
    wisdom: 'Not every delay or loss is evil; sometimes it is protection and wisdom.',
    wisdomAr: 'ليس كل تأخير أو فقدان شرًا؛ قد يكون فيه حفظ وحكمة.',
  },
];

export const KisasWaEibar = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          {language === 'ar' ? 'قصص وعبر' : 'Stories and Lessons'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {language === 'ar'
            ? 'قصص إسلامية قصيرة مع حكم وعبر عملية للحياة اليومية'
            : 'Short Islamic stories with practical wisdom for everyday life'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((item) => (
          <Card key={item.title} className="p-6 border border-emerald-100 dark:border-emerald-900/40">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-3">
              {language === 'ar' ? item.titleAr : item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {language === 'ar' ? item.storyAr : item.story}
            </p>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                {language === 'ar' ? 'العبرة' : 'Wisdom'}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {language === 'ar' ? item.wisdomAr : item.wisdom}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
