import { useState, useEffect } from 'react';
import { Mail, User, MessageSquare, Send, Github, Instagram, Linkedin, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = language === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'ar' ? 'الرسالة قصيرة جداً' : 'Message is too short';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (validateForm()) {
      setLoading(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'mm_mendas@esi.dz', // Your email address
          }
        );

        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitError(
          language === 'ar'
            ? 'حدث خطأ في إرسال الرسالة. حاول مرة أخرى.'
            : 'Failed to send message. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full">
            <Mail className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('contactTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('contactDescription')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('contactInfo')}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('email')}</p>
                <a href="mailto:mm_mendas@esi.dz" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                  mm_mendas@esi.dz
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">{t('followUs')}</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://github.com/salaheddinemds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/salah_eddine.mds/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/salah-eddine-mendas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://salaheddinemds.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                  title="Portfolio"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            {language === 'ar' ? 'حول هذا المشروع' : 'About This Project'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {language === 'ar'
              ? 'منصة تعليمية إسلامية تفاعلية مصممة لاختبار وتعزيز المعرفة الدينية. صُنعت بـ React و TypeScript و Tailwind CSS.'
              : 'An interactive Islamic educational platform designed to test and enhance religious knowledge. Built with React, TypeScript, and Tailwind CSS.'
            }
          </p>
        </Card>
      </div>

      <Card className="p-8">
        {submitted ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Send className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Message Sent Successfully!'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'ar'
                ? 'شكراً لك! سنقوم بالرد عليك قريباً.'
                : 'Thank you! We\'ll get back to you soon.'
              }
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-red-800 dark:text-red-200">{submitError}</p>
              </div>
            )}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4" />
                {t('name')}
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="w-4 h-4" />
                {t('email')}
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4" />
                {t('message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`
                  w-full px-4 py-2.5 rounded-lg border
                  ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  bg-white dark:bg-gray-700
                  text-gray-900 dark:text-gray-100
                  placeholder-gray-400 dark:placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                  transition-colors
                `}
                placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              <span className="flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {loading 
                  ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                  : t('sendMessage')
                }
              </span>
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};
