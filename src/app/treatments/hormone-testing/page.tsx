import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Leaf,
  Activity,
  Target,
  CheckCircle,
  ArrowLeft,
  Users,
  Heart,
  Zap,
  Droplets,
  Moon
} from "lucide-react";

export default function HormoneTesting() {
  const hormones = [
    { name: "Thyroid Hormones", description: "T3, T4, TSH, Reverse T3, and thyroid antibodies" },
    { name: "Sex Hormones", description: "Estrogen, Progesterone, Testosterone, DHEA" },
    { name: "Adrenal Hormones", description: "Cortisol, Aldosterone, Adrenaline" },
    { name: "Insulin & Blood Sugar", description: "Insulin, Glucose, HbA1c, C-peptide" },
    { name: "Growth Hormone", description: "IGF-1 and growth hormone levels" },
    { name: "Melatonin", description: "Sleep hormone and circadian rhythm assessment" }
  ];

  const symptoms = [
    "Chronic fatigue and low energy",
    "Weight gain or difficulty losing weight",
    "Mood changes and irritability",
    "Sleep disturbances",
    "Hot flashes and night sweats",
    "Low libido",
    "Brain fog and memory issues",
    "Hair loss or thinning",
    "Irregular menstrual cycles",
    "Anxiety and depression",
    "Cold hands and feet",
    "Digestive issues"
  ];

  const treatments = [
    "Comprehensive hormone testing panels",
    "Bioidentical hormone replacement therapy",
    "Nutritional optimization for hormone production",
    "Stress management and adrenal support",
    "Sleep optimization protocols",
    "Targeted supplementation",
    "Lifestyle modification guidance",
    "Regular monitoring and adjustments",
    "Detoxification support",
    "Exercise and movement recommendations"
  ];

  const testingOptions = [
    {
      title: "Comprehensive Hormone Panel",
      description: "Complete assessment of all major hormone systems including thyroid, adrenals, and sex hormones.",
      icon: Target
    },
    {
      title: "Saliva Testing",
      description: "Measures free hormone levels throughout the day to assess circadian rhythms and stress patterns.",
      icon: Droplets
    },
    {
      title: "Urine Metabolite Testing",
      description: "Advanced testing to see how your body processes and eliminates hormones.",
      icon: Activity
    },
    {
      title: "Blood Serum Analysis",
      description: "Traditional blood tests combined with advanced markers for comprehensive evaluation.",
      icon: Heart
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-sage-50 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sage-600">
            <Link href="/treatments" className="hover:text-sage-800 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Treatments
            </Link>
            <span>/</span>
            <span className="text-sage-800">Hormone Testing & Balancing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Hormone Testing & Balancing
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Advanced Testing and Natural Hormone Optimization
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Restore hormonal balance and vitality with our comprehensive hormone testing
              and personalized balancing protocols designed to optimize your natural
              hormone production and function.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Why Hormone Balance Matters
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Hormones are chemical messengers that control virtually every function in your body,
                from metabolism and energy production to mood, sleep, and reproductive health.
                When hormones become imbalanced, it can affect every aspect of your well-being.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Many factors can disrupt hormone balance including stress, environmental toxins,
                poor nutrition, lack of sleep, and aging. Our comprehensive approach identifies
                these disruptions and provides natural solutions to restore optimal hormone function.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                Through advanced testing and personalized treatment protocols, we help you achieve
                hormonal balance that supports energy, mood, metabolism, and overall vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Signs of Hormone Imbalance
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Hormone imbalances can manifest in many different ways. If you&apos;re experiencing
              any of these symptoms, comprehensive hormone testing may provide valuable insights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hormones Tested */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Comprehensive Hormone Assessment
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Our testing evaluates all major hormone systems to provide a complete
              picture of your hormonal health and identify areas that need support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hormones.map((hormone, index) => (
                <Card key={index} className="border-sage-200 bg-sage-50">
                  <CardHeader>
                    <CardTitle className="text-sage-800 flex items-center gap-3">
                      <Zap className="h-6 w-6 text-sage-600" />
                      {hormone.name}
                    </CardTitle>
                    <CardDescription className="text-sage-600 leading-relaxed">
                      {hormone.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Methods */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Advanced Testing Methods
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              We use multiple testing methods to get the most accurate and comprehensive
              view of your hormone levels and how they fluctuate throughout the day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="border-sage-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-sage-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-sage-600" />
                        </div>
                        <CardTitle className="text-sage-800">{option.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sage-600 leading-relaxed">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Natural Hormone Balancing
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Once we understand your unique hormone profile, we create a personalized
              plan to restore balance using natural, bioidentical approaches.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-3 bg-sage-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{treatment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Moon className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Our 4-Step Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Assess", description: "Comprehensive hormone testing and symptom evaluation", icon: Target },
                { title: "Analyze", description: "Detailed interpretation of results and imbalance identification", icon: Activity },
                { title: "Action", description: "Personalized treatment plan with natural hormone support", icon: Heart },
                { title: "Adjust", description: "Regular monitoring and protocol refinement", icon: Users }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-sage-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <div className="p-3 bg-sage-100 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-sage-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-2">{step.title}</h3>
                    <p className="text-sage-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Restore Your Hormonal Balance
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Don&apos;t let hormone imbalances rob you of your vitality and well-being.
              Schedule a consultation to learn how comprehensive hormone testing
              and natural balancing can transform your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
              >
                <Link href="/book-online">Schedule Testing</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 text-lg"
              >
                <Link href="/team">Meet Teresa Foster, FNP</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}