"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sprout, Target, Users, TrendingUp, Zap, Heart, Leaf } from 'lucide-react';

type SlideType = 'cover' | 'problem' | 'solution' | 'mechanics' | 'differentiation' | 'magic' | 'market' | 'traction' | 'vision' | 'business' | 'team' | 'ask' | 'closing';

interface Slide {
  type: SlideType;
  title?: string;
  subtitle?: string;
  tagline?: string;
  headline?: string;
  points?: string[];
  stat?: string;
  description?: string;
  features?: string[];
  steps?: Array<{ title: string; desc: string }>;
  comparisons?: Array<{ category: string; problem: string; solution: string }>;
  differentiator?: string;
  segments?: Array<{ group: string; desc: string; size: string }>;
  growth?: string;
  achievements?: string[];
  status?: string;
  roadmap?: Array<{ phase: string; goals: string[] }>;
  model?: string;
  principles?: string[];
  philosophy?: string;
  founder?: { name: string; expertise: string[] };
  seeking?: string[];
  needs?: string[];
  offer?: string;
  cta?: string;
  contact?: string;
}

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      type: 'cover',
      title: 'Sprout',
      subtitle: 'Grow the life you want, one seed at a time',
      tagline: 'Meet Sproutly, your time gardener'
    },
    {
      type: 'problem',
      title: 'The Problem',
      headline: 'We track every dollar, but waste our hours',
      points: [
        'People use sophisticated tools for finances (Mint, YNAB) and fitness (Strava, MyFitnessPal)',
        'But for our most finite resource—time and attention—we rely on memory and guilt',
        'The result? Days, weeks, and years slip away on autopilot, away from our true goals'
      ],
      stat: '96 Seeds per day (16 waking hours) = our most valuable, untracked asset'
    },
    {
      type: 'solution',
      title: 'The Solution',
      headline: 'A delightful companion who helps you grow',
      description: 'Sprout transforms abstract time into visible growth. It\'s not just a tracker—it\'s a garden where your skills flourish.',
      features: [
        'Each 10 minutes = 1 Seed you can plant',
        'Create Plots for what matters (Guitar, Health, Learning)',
        'Watch your garden grow as you invest Seeds',
        'Meet Sproutly, your cheerful gardener who celebrates every win'
      ]
    },
    {
      type: 'mechanics',
      title: 'How It Works',
      headline: 'From abstract time to visible growth',
      steps: [
        {
          title: 'Wake Up',
          desc: 'Set your wake/sleep schedule. Sproutly greets you: "Good morning! You have 96 Seeds today. What will you grow?"'
        },
        {
          title: 'Grow Your Plots',
          desc: 'Log activities. "I practiced guitar for 30 min" = 3 Seeds planted in your Guitar Plot'
        },
        {
          title: 'Watch It Flourish',
          desc: 'Your Plots level up and grow visually. Guitar Plot reaches Level 5—it becomes a small tree! 🌳'
        },
        {
          title: 'Celebrate Together',
          desc: 'Sproutly cheers your progress, gently nudges when you drift, and shows you your thriving garden'
        }
      ]
    },
    {
      type: 'differentiation',
      title: 'Why Sprout Wins',
      headline: 'Growth, not guilt. Gardens, not graphs.',
      comparisons: [
        {
          category: 'Traditional Time Trackers',
          problem: 'Sterile charts that make you feel bad about "wasted time"',
          solution: 'Sprout shows a beautiful garden that celebrates what you GREW'
        },
        {
          category: 'Habit Apps',
          problem: 'Binary checkboxes that don\'t show depth of investment',
          solution: 'Sprout quantifies how much you invested—watch your Guitar Plot grow from seedling to tree'
        },
        {
          category: 'Productivity Apps',
          problem: 'Endless task lists that overwhelm and stress you out',
          solution: 'Sprout creates peace—you have Seeds to plant thoughtfully, not tasks to frantically complete'
        }
      ]
    },
    {
      type: 'magic',
      title: 'The Secret Sauce',
      headline: 'Sproutly: Your Time Gardener',
      description: 'Sproutly isn\'t a chatbot or notification system. It\'s a relationship. A little sprout character who grows WITH you.',
      features: [
        'Morning greeting: "You have 12 Seeds left today—want to grow your Reading Plot?"',
        'Celebrates milestones: Animates and dances when your Health Plot levels up',
        'Gentle pattern recognition: "Your YouTube Plot is getting pretty big... everything okay?"',
        'Builds connection: Users return not because they have to, but because they want to see Sproutly'
      ],
      differentiator: 'Sproutly transforms tracking from a chore into a friendship'
    },
    {
      type: 'market',
      title: 'The Market',
      headline: 'The attention economy needs its Duolingo',
      segments: [
        {
          group: 'Primary: The Intentional Achiever',
          desc: 'Ages 25-45, feeling busy but not productive. Wants to learn guitar, build a side project, be more present with family. Seeks tools that work.',
          size: '50M+ in US alone'
        },
        {
          group: 'Secondary: Students & Lifelong Learners',
          desc: 'Juggling multiple pursuits, need to see their investment paying off to stay motivated.',
          size: '20M+ students in higher ed'
        },
        {
          group: 'Future: Corporate Wellness',
          desc: 'Companies desperate to reduce burnout and help employees find balance and meaningful productivity.',
          size: '$50B+ wellness market'
        }
      ],
      growth: 'Sprout is the foundational habit for achieving any goal'
    },
    {
      type: 'traction',
      title: 'What We Have Today',
      headline: 'A working MVP, ready to flourish',
      achievements: [
        'Fully functional React Native/Expo app with core tracking',
        'Seed currency system (10min = 1 Seed) implemented and tested',
        'Plot creation and growth mechanics working',
        'Foundation proven—ready to build Sproutly\'s personality and garden visualization'
      ],
      status: 'This is a de-risked opportunity. The hardest technical work is done. Now we need to make it delightful.'
    },
    {
      type: 'vision',
      title: 'The Vision',
      headline: 'Become the OS for intentional living',
      roadmap: [
        {
          phase: 'Phase 1 (Next 6mo)',
          goals: [
            'Perfect the garden visualization—make Plots beautiful and satisfying to watch grow',
            'Build Sproutly\'s personality with Lottie animations',
            'Launch and acquire first 10K users through product-led growth'
          ]
        },
        {
          phase: 'Phase 2 (6-18mo)',
          goals: [
            'Community features: Share your garden, celebrate friends\' growth',
            'Smart insights: "Your most productive Seeds are planted in the morning"',
            'Scale to 100K users'
          ]
        },
        {
          phase: 'Phase 3 (18-36mo)',
          goals: [
            'B2B wellness platform for companies',
            'Educational partnerships (help students manage time)',
            'Become the consumer champion for the attention economy'
          ]
        }
      ]
    },
    {
      type: 'business',
      title: 'Business Model',
      headline: 'Genuine growth, not growth hacking',
      model: 'Subscription: $1-3/month for premium features',
      principles: [
        'No predatory microtransactions. No pay-to-win. No dark patterns.',
        'Core tracking always free—we earn loyalty by providing genuine value',
        'Premium: Advanced insights, unlimited Plots, custom Sproutly personalities',
        'Long-term: Corporate wellness licensing ($50-100/employee/year)'
      ],
      philosophy: 'We succeed when users\' lives genuinely improve. Integrity is our moat.'
    },
    {
      type: 'team',
      title: 'The Team',
      founder: {
        name: 'Technical Founder',
        expertise: [
          'Deep React Native/Expo expertise—full-stack developer',
          'Passionate about productivity psychology and habit formation',
          'Built and shipped the working MVP solo',
          'Vision for genuine products that reshape lives, not extract value'
        ]
      },
      seeking: [
        'Product/Gamification Designer: To perfect Sproutly\'s personality and the garden visualization',
        'Growth Marketer: To craft messaging and acquire our first 10K users organically',
        'Strategic Advisor: To guide business model, fundraising, and scale strategy'
      ]
    },
    {
      type: 'ask',
      title: 'What We\'re Looking For',
      headline: 'Connections to make Sprout essential',
      needs: [
        'Advisors or co-founders excited about consumer habit-forming apps',
        'Connections to folks from Duolingo, Headspace, Calm, or similar success stories',
        'Product designers with Lottie/animation expertise who can bring Sproutly to life',
        'Growth marketers who understand lifestyle app acquisition and retention'
      ],
      offer: 'We have the working product. We need the team to help millions grow better lives.'
    },
    {
      type: 'closing',
      title: 'Let\'s Grow Sprout Together',
      tagline: 'Help millions plant their Seeds wisely and watch their lives flourish',
      cta: 'I\'d love to show you the live app and Sproutly in action.',
      contact: '[Your Name] • [Your Email]'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const renderSlide = (slide: Slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-12">
            <div className="relative mb-8">
              <Sprout className="w-32 h-32 text-emerald-600 dark:text-emerald-400" />
              <div className="absolute -bottom-2 -right-2 text-4xl">🌱</div>
            </div>
            <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-4">{slide.title}</h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">{slide.subtitle}</p>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 italic">{slide.tagline}</p>
          </div>
        );

      case 'problem':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-3xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="space-y-6 mb-8">
              {slide.points?.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 flex-shrink-0" />
                  <p className="text-xl text-gray-700 dark:text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 mt-auto">
              <p className="text-2xl font-bold text-red-900 dark:text-red-300">{slide.stat}</p>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-3xl text-emerald-600 dark:text-emerald-400 font-semibold mb-6">{slide.headline}</p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{slide.description}</p>
            <div className="grid grid-cols-2 gap-6">
              {slide.features?.map((feature, i) => (
                <div key={i} className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <Leaf className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                  <p className="text-lg text-gray-800 dark:text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'mechanics':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="grid grid-cols-2 gap-8">
              {slide.steps?.map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-bold text-emerald-100 dark:text-emerald-900 absolute -top-4 -left-2">{i + 1}</div>
                  <div className="relative bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-emerald-200 dark:border-emerald-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'differentiation':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="space-y-6">
              {slide.comparisons?.map((comp, i) => (
                <div key={i} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{comp.category}</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Their Problem:</p>
                      <p className="text-gray-700 dark:text-gray-300">{comp.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Sprout Solution:</p>
                      <p className="text-gray-700 dark:text-gray-300">{comp.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'magic':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-3xl text-purple-600 dark:text-purple-400 font-semibold mb-4">{slide.headline}</p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic">{slide.description}</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {slide.features?.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 dark:text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6">
              <p className="text-xl font-bold text-purple-900 dark:text-purple-300">{slide.differentiator}</p>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="space-y-6 mb-6">
              {slide.segments?.map((seg, i) => (
                <div key={i} className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{seg.group}</h3>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">{seg.size}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{seg.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-lg">
              <p className="text-xl font-bold">{slide.growth}</p>
            </div>
          </div>
        );

      case 'traction':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-3xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {slide.achievements?.map((achievement, i) => (
                <div key={i} className="flex items-center gap-4 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <p className="text-lg text-gray-800 dark:text-gray-200">{achievement}</p>
                </div>
              ))}
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-600 p-6">
              <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-300">{slide.status}</p>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="space-y-6">
              {slide.roadmap?.map((phase, i) => (
                <div key={i} className="relative pl-8 border-l-4 border-emerald-300 dark:border-emerald-700">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.goals.map((goal, j) => (
                      <li key={j} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-500">→</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-6">{slide.headline}</p>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mb-8 border border-emerald-200 dark:border-emerald-800">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{slide.model}</p>
            </div>
            <div className="space-y-4 mb-8">
              {slide.principles?.map((principle, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 flex-shrink-0" />
                  <p className="text-lg text-gray-700 dark:text-gray-300">{principle}</p>
                </div>
              ))}
            </div>
            <div className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-lg">
              <p className="text-xl font-bold">{slide.philosophy}</p>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">{slide.title}</h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg mb-8 border border-emerald-200 dark:border-emerald-800">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{slide.founder?.name}</h3>
              <div className="space-y-2">
                {slide.founder?.expertise.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Actively Seeking:</h3>
            <div className="grid grid-cols-1 gap-4">
              {slide.seeking?.map((role, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
                  <p className="text-lg text-gray-800 dark:text-gray-200">{role}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ask':
        return (
          <div className="p-12 h-full flex flex-col justify-center bg-white dark:bg-slate-900">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h2>
            <p className="text-3xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.headline}</p>
            <div className="space-y-4 mb-8">
              {slide.needs?.map((need, i) => (
                <div key={i} className="flex items-start gap-4 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-800 dark:text-gray-200">{need}</p>
                </div>
              ))}
            </div>
            <div className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-lg">
              <p className="text-xl font-bold">{slide.offer}</p>
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-12">
            <div className="relative mb-6">
              <Sprout className="w-24 h-24 text-emerald-600 dark:text-emerald-400" />
              <div className="absolute -bottom-2 -right-2 text-3xl">🌱</div>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">{slide.title}</h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">{slide.tagline}</p>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold mb-8">{slide.cta}</p>
            <p className="text-xl text-gray-800 dark:text-gray-200">{slide.contact}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-white dark:bg-slate-900 flex flex-col">
      <div className="flex-1 overflow-hidden">
        {renderSlide(slides[currentSlide])}
      </div>

      <div className="border-t border-gray-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? 'bg-emerald-600 w-8' : 'bg-gray-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8 px-12">
        <div className="flex items-center gap-4">
          <Sprout className="w-12 h-12" />
          <div>
            <h1 className="text-4xl font-bold">Sprout</h1>
            <p className="text-emerald-100 text-sm">Grow the life you want, one seed at a time</p>
          </div>
        </div>
      </div>
      <PitchDeck />
    </main>
  );
}