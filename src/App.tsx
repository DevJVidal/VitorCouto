import { useState, startTransition, useEffect } from "react";
import { 
  Zap, 
  Activity, 
  Award, 
  TrendingUp, 
  Check, 
  Flame, 
  Star, 
  Clock, 
  CheckCircle2,
  Lock,
  ArrowRight,
  Dumbbell,
  Apple,
  MessageCircle,
  Users,
  Target,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function App() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdw-7EirTH9BSH8Jwa6fxkIkry2V3_4s2VVK2gtPL9_QVevIQ/viewform";

  const beforeAfterResults = [
    {
      id: 1,
      name: "Roberta Meire",
      age: 34,
      objective: "emagrecimento",
      title: "Eliminação de 14.2kg de Gordura Corporal",
      duration: "12 semanas",
      strategy: "Treinamento metabólico de alta voltagem e déficit calórico estratégico.",
      testimonial: "Eu estava cansada de treinos genéricos de fichas frias da academia. O Vitor consertou minha postura e periodizou meus descansos de modo cirúrgico. Minha barriga sumiu e ganhei muita força.",
      beforeImg: "https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/35bbaaf5a56f11ce7d56689ff8f01ffc.jpg",
      afterImg: "https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/e5582caf354755cbf3c37c603155306d.jpg"
    },
    {
      id: 2,
      name: "Rodrigo Camargo",
      age: 29,
      objective: "hipertrofia",
      title: "Ganho Absoluto de 6.5kg de Massa Magra",
      duration: "16 semanas",
      strategy: "Progressão tática de cargas guiada por volume e superávit calórico limpo.",
      testimonial: "Sempre fui muito magro e achei que genética me limitava. Com a assessoria do Vitor, entendi como a biomecânica correta muda a ativação muscular. Minhas cargas dobraram de forma segura.",
      beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 3,
      name: "Beatriz Silveira",
      age: 43,
      objective: "emagrecimento",
      title: "Recomposição Corporal & Fim de Dor Lombar",
      duration: "10 semanas",
      strategy: "Fortalecimento do complexo do core e treinamento aeróbio flexível.",
      testimonial: "Tinha muita dor nas costas e medo de treinar pesado. O Vitor realizou testes de mobilidade excelentes antes de prescrever as séries. Hoje treino forte, sem dores e com autoestima renovada.",
      beforeImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 4,
      name: "Lucas Medeiros",
      age: 31,
      objective: "hipertrofia",
      title: "Definição Abdominal & Redução de 8% de BF",
      duration: "14 semanas",
      strategy: "Déficit calórico progressivo e aumento do volume de treino de core/superiores.",
      testimonial: "Sensacional! O Vitor planejou meus treinos conciliando com minha rotina cansativa de viagens. Consegui trincar o abdômen sem deixar de comer o que gosto.",
      beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 5,
      name: "Camila Fernandes",
      age: 27,
      objective: "hipertrofia",
      title: "Ganho de Coxa, Glúteos & Definição",
      duration: "20 semanas",
      strategy: "Periodização ondulatória de alta densidade focada em membros inferiores.",
      testimonial: "A melhor decisão que tomei. Nunca tinha conseguido desenvolver pernas, mas a técnica que o Vitor ensina nos vídeos de correção mudou meu corpo completamente.",
      beforeImg: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 6,
      name: "André Vasconcelos",
      age: 41,
      objective: "emagrecimento",
      title: "Reversão de Sedentarismo & Ganho de 5kg",
      duration: "18 semanas",
      strategy: "Adaptação neuromuscular avançada combinada com cardio de alta intensidade.",
      testimonial: "Aos 41 anos achei que não teria mais evolução. O Vitor estruturou um plano em que me sinto com energia o dia todo e com disposição incrível para treinar.",
      beforeImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 7,
      name: "Mariana Costa",
      age: 33,
      objective: "emagrecimento",
      title: "Redução de Medidas & Definição Corporal",
      duration: "12 semanas",
      strategy: "Estímulos tensionais em circuito e readequação de ingestão proteica.",
      testimonial: "Treinava há anos e não via meus braços definirem. Em 3 meses de acompanhamento com o Vitor, meu corpo desenhou e minhas roupas agora vestem incrivelmente bem.",
      beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 8,
      name: "Felipe Rezende",
      age: 25,
      objective: "hipertrofia",
      title: "Aumento de Densidade de Peitoral & Ombros",
      duration: "16 semanas",
      strategy: "Trabalho específico de pontos fracos e progressão de volume de treino.",
      testimonial: "O acompanhamento é sensacional. O aplicativo, as correções de postura que ele envia e a planilha de carga facilitaram tudo para focar só no treino pesado.",
      beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=450&h=550"
    },
    {
      id: 9,
      name: "Juliana Almeida",
      age: 36,
      objective: "emagrecimento",
      title: "Emagrecimento de 11kg Sem Perder Massa",
      duration: "14 semanas",
      strategy: "Sessões combinadas de musculação pesada e HIIT inteligente.",
      testimonial: "Eu achava que emagrecer significava passar fome e ficar flácida. O Vitor me mostrou que treinar pesado de verdade é o segredo para secar com o corpo durinho.",
      beforeImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=450&h=550",
      afterImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=450&h=550"
    }
  ];

  const filteredResults = beforeAfterResults;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Safe boundary clamp for currentIndex when visibleCount changes
  useEffect(() => {
    const maxIndex = beforeAfterResults.length - visibleCount;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, beforeAfterResults.length, currentIndex]);

  // Autoplay carousel slides every 4 seconds
  useEffect(() => {
    const maxIndex = beforeAfterResults.length - visibleCount;
    if (maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCount, beforeAfterResults.length]);

  return (
    <div className="min-h-screen bg-[#121214] text-slate-100 selection:bg-[#06A7D9] selection:text-white font-sans antialiased">
      
      {/* Premium Urgent Accent Header Bar */}
      <div className="bg-[#06A7D9] text-slate-950 px-4 py-2.5 text-center text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-2">
        <span className="text-[11px] sm:text-xs font-black">⚠️ Vagas limitadas para acompanhamento individual</span>
      </div>

      {/* Visual Athletic Hero Section with dark polished background */}
      <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-32 bg-gradient-to-b from-slate-950 to-[#121214]">
        
        {/* Subtle glowing mesh of the high conversion blue */}
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#06A7D9]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column - Text Details */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-white/10 px-3 py-1.5 rounded-lg text-[#06A7D9] text-[10px] font-bold tracking-wider uppercase mb-8 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06A7D9] animate-ping" />
                <span className="text-[#06A7D9]">CONSULTORIA ONLINE PREMIUM</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase italic leading-[1.05] text-center lg:text-left">
                Seu corpo é único. <br className="hidden sm:inline" />
                Seu <span className="mx-[0.25em] text-[#06A7D9] not-italic font-black inline-block">treino</span>também deveria ser.
              </h1>
              
              <p className="mt-6 text-xs sm:text-base leading-relaxed text-slate-300 text-center lg:text-left">
                Seu corpo merece mais do que treinos prontos. Através de uma análise detalhada da sua biomecânica e dos seus objetivos, elaboro um planejamento de treinamento individualizado, com periodização inteligente para maximizar a perda de gordura, o ganho de força e o desenvolvimento muscular de forma segura e eficiente.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <a
                  href="#formulario"
                  className="inline-flex items-center justify-center rounded-xl bg-[#06A7D9] px-8 py-4 text-xs font-bold tracking-wider text-slate-950 uppercase transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-[#06A7D9]/20 cursor-pointer text-center"
                >
                  Fazer Minha Transformação
                  <ArrowRight className="h-4 w-4 ml-2 shrink-0" />
                </a>
                <a
                  href="#o-que-entrega"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 px-8 py-4 text-xs font-bold tracking-wide text-slate-300 hover:text-white transition hover:bg-slate-800 cursor-pointer text-center"
                >
                  TEAM VITOR COUTO
                </a>
              </div>
            </div>

            {/* Right Column - Premium 3D-like Composition of the Personal Trainer */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex flex-col items-center w-full">
              <div className="relative w-full max-w-md h-[420px] sm:h-[550px] flex items-end justify-center">
                
                {/* Sleek Dark/Cyan vertical column/pillar spanning full width behind him */}
                <div className="absolute inset-x-0 bottom-0 top-[10%] w-full bg-gradient-to-b from-[#050A17] to-[#090D16] rounded-2xl z-0 overflow-hidden flex flex-col items-center pt-8 border border-white/5">
                </div>

                {/* Main Portrait image sitting on top, popping out with 3D depth */}
                <div className="absolute inset-x-0 bottom-0 h-[105%] flex items-end justify-center z-10 pointer-events-none">
                  <img 
                    src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/3337364020d8a311422f607e9b417d42.png" 
                    alt="Vitor Couto Personal Trainer" 
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain object-bottom pointer-events-auto filter drop-shadow-[0_18px_30px_rgba(0,0,0,0.95)] hover:scale-[1.02] transition-all duration-700 ease-in-out"
                  />
                </div>

                {/* Floating Info Badge on bottom holding the Authority Metrics */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20 shadow-2xl">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="text-center">
                      <div className="text-xl sm:text-3xl font-extrabold text-[#06A7D9]">+150</div>
                      <div className="text-[8px] sm:text-[10px] font-black text-slate-300 uppercase tracking-wider mt-1 leading-tight">Alunos</div>
                    </div>
                    <div className="text-center border-l border-white/10 pl-2">
                      <div className="text-xl sm:text-3xl font-extrabold text-white">100%</div>
                      <div className="text-[8px] sm:text-[10px] font-black text-slate-300 uppercase tracking-wider mt-1 leading-tight">EFICIENTE</div>
                    </div>
                    <div className="text-center border-l border-white/10 pl-2">
                      <div className="text-xl sm:text-3xl font-extrabold text-[#06A7D9]">100%</div>
                      <div className="text-[8px] sm:text-[10px] font-black text-slate-300 uppercase tracking-wider mt-1 leading-tight">Online</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* O QUE ENTREGA (Deliverables Section) with dark slate colors */}
      <section id="o-que-entrega" className="py-24 bg-slate-950 border-t border-b border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono bg-slate-900 border border-white/10 px-3 py-1.5 rounded-full shadow-sm">
              METODOLOGIA DE ALTO IMPACTO
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-none">
              O que você recebe no <span className="ml-[0.25em] text-[#06A7D9] not-italic inline-block">TEAM VITOR COUTO</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-2xl mx-auto">
              Todo o suporte, acompanhamento técnico e planejamento integrado necessário para você ter resultados reais e acelerados de forma saudável.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            
            {/* Item 1 */}
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#06A7D9] transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/10 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/20 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#06A7D9] bg-[#06A7D9]/10 border border-[#06A7D9]/10 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3 w-3 stroke-[3px]" /> Incluso
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-tight">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Treino pelo App MFIT
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Sua periodização de exercícios completa de alta performance, atualizada na tela do seu celular com vídeos demonstrativos de cada movimento e registro prático de cargas.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#06A7D9] transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/10 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/20 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <Apple className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#06A7D9] bg-[#06A7D9]/10 border border-[#06A7D9]/10 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3 w-3 stroke-[3px]" /> Incluso
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-tight">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Planejamento Alimentar
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Elaborado por nutricionista, com divisão de macronutrientes sob medida e cronograma planejado estrategicamente para potencializar sua taxa metabólica, ganho muscular e queima de gordura.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#06A7D9] transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/10 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/20 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <Activity className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#06A7D9] bg-[#06A7D9]/10 border border-[#06A7D9]/10 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3 w-3 stroke-[3px]" /> Incluso
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-tight">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Mobilidade & Alongamento
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Exercícios direcionados de flexibilidade e soltura articular para aprimorar sua amplitude de agachamento e supino, blindando suas articulações contra lesões e dores.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#06A7D9] transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/10 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/20 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#06A7D9] bg-[#06A7D9]/10 border border-[#06A7D9]/10 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3 w-3 stroke-[3px]" /> Incluso
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-tight">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Estratégia de Sono & Hidratação
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Planejamento e otimização do ciclo circadiano e taxas específicas de consumo hídrico diário para otimizar o ganho de massa muscular e sua disposição ao longo do dia.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#06A7D9] transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/10 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/20 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#06A7D9] bg-[#06A7D9]/10 border border-[#06A7D9]/10 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3 w-3 stroke-[3px]" /> Incluso
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-tight">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Suporte Direto Comigo
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Acesso prioritário de contato direto para envio de gravações de execução dos exercícios pesados, dúvidas frequentes, ajuste de planilhas e feedbacks imediatos.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#06A7D9] transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/10 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/20 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-[#06A7D9] bg-[#06A7D9]/10 border border-[#06A7D9]/10 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="h-3 w-3 stroke-[3px]" /> Incluso
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-tight">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Grupo VIP Exclusivo
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Comunidade de elite dos alunos focados no mesmo objetivo. Um ambiente com trocas diárias de conhecimento, superação de recordes de cargas e motivação extrema.
                </p>
              </div>
            </div>

            {/* Item 7 - Asymmetric / Centered Highlight Grid Option */}
            <div className="bg-gradient-to-br from-[#1c1c1e] to-slate-900 p-6 sm:p-8 rounded-2xl border border-[#06A7D9]/20 hover:border-[#06A7D9] transition-all duration-300 shadow-2xl group flex flex-col justify-between sm:col-span-2 lg:col-span-3 max-w-2xl lg:mx-auto w-full">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#06A7D9]/20 text-[#06A7D9] flex items-center justify-center border border-[#06A7D9]/30 group-hover:bg-[#06A7D9] group-hover:text-slate-950 transition-all duration-300">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-black text-white bg-gradient-to-r from-[#06A7D9] to-blue-600 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[#06A7D9]/20">
                    <Check className="h-3.5 w-3.5 text-[slate-950] stroke-[3px]" /> Acompanhamento de Elite
                  </span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-black tracking-tight text-white uppercase italic flex items-center gap-2 leading-none">
                  <span className="text-[#06A7D9] not-italic drop-shadow-[0_0_8px_rgba(6,167,217,0.4)]">✔</span> Relatórios de Evolução Estruturados
                </h3>
                <p className="mt-3.5 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                  Acompanhamento minucioso de dobras de percentual de gordura, registros de medidas de circunferências, pesagem controlada e análise de fotos tridimensionais de progresso técnico para tomadas de decisões cirúrgicas no planejamento.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO & SOBRE MIM (About Me Section, Elegant Dark Palette) */}
      <section id="sobre" className="py-20 bg-[#121214] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Author Portrait with premium stylish framing */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                {/* Visual back glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#06A7D9] to-[#F6F0F2]/20 rounded-2xl blur-md opacity-25 group-hover:opacity-45 transition duration-300" />
                
                <div className="relative bg-[#1c1c1e] p-3 sm:p-4 rounded-2xl border border-white/5 shadow-2xl">
                  <img 
                    src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/fade890a2580edf8120ebb8589d3a682.png" 
                    alt="Vitor Couto Personal Trainer" 
                    referrerPolicy="no-referrer"
                    className="w-full h-[420px] sm:h-[550px] object-cover rounded-xl shadow-inner object-top"
                  />
                  <div className="mt-4 flex items-center justify-between px-2">
                    <div className="text-left">
                      <span className="text-xs sm:text-sm font-bold text-white block uppercase tracking-wide">Vitor Couto</span>
                      <span className="text-[10px] text-[#06A7D9] font-bold font-mono">CREF 021359 - G/CE</span>
                    </div>
                    <span className="bg-[#06A7D9] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest italic shrink-0">
                      ATLETA E TREINADOR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Narrative Text */}
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono">LIDERANÇA DE IMPACTO</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-white uppercase italic leading-tight">
                A diferença fundamental entre se cansar e de fato treinar para evoluir esteticamente.
              </h2>
              
              <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Olá, eu sou o <strong>Vitor Couto</strong>. Através de anos de atuação no alto escalão da musculação presencial e direcionando centenas de alunos remotamente pela minha assessoria, descobri que o pior erro está nas repetições no estilo "automático".
              </p>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Cada pessoa possui diferentes comprimentos de clavícula, quadril e grau de encurtamento de isquiotibiais. Para mim, a musculação é a aplicação prática de alavancas físicas sob as articulações. Ajusto seus ângulos de tração, cadência para máxima contração e quantidade ideal de séries semanais.
              </p>

              {/* Badget list of Experience */}
              <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="p-4 bg-[#1c1c1e] rounded-xl border border-white/5 shadow-md text-left">
                  <Award className="h-5 w-5 text-[#06A7D9] mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Formação Sólida e Licenciada</h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-1">Sólidos estudos em biomecânica esportiva aplicada e fisiologia de hipertrofia.</p>
                </div>

                <div className="p-4 bg-[#1c1c1e] rounded-xl border border-white/5 shadow-md text-left">
                  <Star className="h-5 w-5 text-[#06A7D9] mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direcionamento Realístico</h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-1">Estratégia pensada para quem tem rotinas preenchidas, mas quer rendimento de elite de verdade.</p>
                </div>
              </div>

              <div className="mt-8">
                <blockquote className="border-l-4 border-[#06A7D9] pl-4 italic text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  "Eu não estou aqui para apenas mandar você cansar na esteira. Estou aqui para planejar a biomecânica mais eficiente a fim de destravar a definição do seu corpo no menor espaço de tempo."
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EVOLUÇÃO E ANTES E DEPOIS (Results & Testimonials Section) */}
      <section id="resultados" className="py-20 bg-slate-950 border-t border-b border-white/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono">RESULTADOS DOS ALUNOS - TEAM VITOR COUTO</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Resultado não vem da sorte. Vem de <span className="text-[#06A7D9]">estratégia</span>.
              <span className="block mt-2 text-lg sm:text-xl text-slate-300 font-semibold">
                E estratégia começa com uma <span className="underline decoration-[#06A7D9] decoration-2 underline-offset-4">decisão</span>.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Conheça a evolução real de quem decidiu agir. Pessoas comuns que seguiram o método exclusivo do <span className="text-white font-medium">Team Vitor Couto</span> e conquistaram o físico que sempre desejaram.
            </p>
          </div>

          {/* Carousel Viewport */}
          <div className="relative max-w-6xl mx-auto px-1">
            <div className="overflow-hidden w-full rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)` }}
              >
                {filteredResults.map((result) => (
                  <div 
                    key={result.id} 
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                  >
                    <div className="bg-[#1c1c1e] rounded-2xl border border-white/5 p-5 sm:p-6 flex flex-col justify-between shadow-xl h-full">
                      
                      {/* Visual Before & After Panel */}
                      <div>
                        <div className="grid grid-cols-2 gap-3 mb-5 relative">
                          {/* Before Image block with fallback design */}
                          <div className="relative rounded-xl overflow-hidden shadow-inner border border-white/5 bg-slate-900 group">
                            <span className="absolute top-2 left-2 z-10 bg-slate-950/85 text-[8px] font-bold uppercase text-white tracking-widest px-2 py-0.5 rounded">
                              Antes
                            </span>
                            <img 
                              src={result.beforeImg} 
                              alt="Evolução Antes" 
                              referrerPolicy="no-referrer"
                              className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-all duration-300"
                            />
                          </div>

                          {/* After Image block with highlight border */}
                          <div className="relative rounded-xl overflow-hidden shadow-inner border-2 border-[#06A7D9] bg-slate-900 group">
                            <span className="absolute top-2 right-2 z-10 bg-[#06A7D9] text-[8px] font-black uppercase text-white tracking-widest px-2 py-0.5 rounded">
                              Depois
                            </span>
                            <img 
                              src={result.afterImg} 
                              alt="Evolução Depois" 
                              referrerPolicy="no-referrer"
                              className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-all duration-300"
                            />
                          </div>
                        </div>

                        {/* Header Metrics info */}
                        <div className="border-b border-white/5 pb-4 mb-4 text-left">
                          <h3 className="text-sm font-extrabold text-white uppercase italic tracking-tight leading-snug">
                            {result.title}
                          </h3>
                        </div>

                        {/* Testimonial block */}
                        <div className="relative py-1 text-left">
                          <p className="text-xs italic text-slate-300 leading-relaxed font-sans min-h-[60px]">
                            "{result.testimonial}"
                          </p>
                        </div>
                      </div>

                      {/* Patient Signature Footer */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-left">
                        <div>
                          <span className="text-xs font-extrabold text-[#06A7D9] block uppercase italic">{result.name}</span>
                          <span className="text-[9px] text-slate-400 font-sans">
                            {result.age} anos — {["Roberta Meire", "Camila Fernandes", "Mariana Costa", "Juliana Almeida"].includes(result.name) ? "Aluna Orientada" : "Aluno Orientado"}
                          </span>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel navigation controls and indicators */}
            <div className="flex items-center justify-center space-x-6 mt-10">
              <button
                onClick={() => {
                  const maxIndex = beforeAfterResults.length - visibleCount;
                  setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
                }}
                className="p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-white/25 transition-all cursor-pointer shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {/* Dots indicators */}
              <div className="flex items-center space-x-2">
                {Array.from({ length: beforeAfterResults.length - visibleCount + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-6 bg-[#06A7D9]" : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const maxIndex = beforeAfterResults.length - visibleCount;
                  setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
                }}
                className="p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-white/25 transition-all cursor-pointer shadow-lg"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REFINADO LEAD ACQUISITION & CTA CONTAINER (Cinza Escuro elegante) */}
      <section id="formulario" className="py-24 bg-[#121214] relative overflow-hidden border-t border-white/5">
        
        {/* Subtle decorative glowing backdrops */}
        <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#06A7D9]/5 rounded-full blur-[90px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#06A7D9]/5 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 relative">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight text-white leading-tight">
              Pare de Adiar Seu Resultado.
            </h2>
            <p className="mt-3 text-xs font-semibold text-slate-400 uppercase tracking-wide leading-relaxed">
              Clique no botão abaixo para preencher o formulário de aplicação e dar o primeiro passo na sua transformação de alto impacto.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-[#1c1c1e] p-8 rounded-2xl shadow-2xl border border-white/5 text-center flex flex-col items-center">
            
            <div className="h-12 w-12 bg-[#06A7D9]/10 border border-[#06A7D9]/20 rounded-full flex items-center justify-center mb-6">
              <Dumbbell className="h-6 w-6 text-[#06A7D9] animate-pulse" />
            </div>

            <h3 className="text-base sm:text-lg font-bold uppercase italic text-white mb-2 leading-tight">
              FORMULÁRIO DE ANÁLISE COMPORTAMENTAL E DIAGNÓSTICO DE RESULTADO
            </h3>
            
            <p className="text-xs text-slate-400 mb-6 max-w-xs leading-relaxed">
              Este formulário é o primeiro passo para iniciarmos sua jornada de transformação. Suas respostas me ajudarão a entender melhor suas necessidades, objetivos e como eu posso te ajudar a transformar seu corpo nos próximos dias.
            </p>

            {/* Quick credentials inside CTA */}
            <div className="w-full space-y-3 mb-8 text-left bg-slate-950/40 p-4.5 rounded-xl border border-white/5">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Check className="h-4 w-4 text-[#06A7D9] shrink-0" />
                <span>Tempo de preenchimento estimado: <strong>~2 min</strong></span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Check className="h-4 w-4 text-[#06A7D9] shrink-0" />
                <span>Análise direta feita pelo <strong>Vitor Couto</strong></span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Check className="h-4 w-4 text-[#06A7D9] shrink-0" />
                <span>Vagas limitadas para acompanhamento</span>
              </div>
            </div>

            <div className="w-full">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-[#06A7D9] hover:bg-white text-slate-950 py-4 px-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-[#06A7D9]/20 flex items-center justify-center space-x-2.5 group hover:scale-[1.02]"
              >
                <span>COMEÇAR MINHA AVALIAÇÃO AGORA</span>
                <ArrowRight className="h-4 w-4 text-slate-950 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center space-x-2 text-[10px] text-slate-500 font-sans font-medium">
              <Lock className="h-3.5 w-3.5 text-[#06A7D9]" />
              <span>Conexão Segura do Google Forms.</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Design Footer */}
      <footer className="bg-slate-950 text-slate-500 font-sans border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="text-sm font-extrabold text-white uppercase italic tracking-wide">
              MÉTODO DE ALTA PERFORMANCE
            </span>
          </div>
          <p className="text-[11px]">© 2026 Vitor Couto Personal - CREF 021359 - G/CE</p>
        </div>

        {/* Sub-Footer Strip below the main footer */}
        <div className="bg-[#020618] border-t border-white/5 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-xs font-normal">
                Desenvolvido por
              </span>
              <a 
                href="https://backfire.agency" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-1.5 group hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://i.imgur.com/XKPIDpU.png" 
                  alt="Backfire Agency Logo" 
                  className="h-5 w-auto object-contain filter drop-shadow-[0_1px_6px_rgba(255,85,0,0.2)]"
                  referrerPolicy="no-referrer"
                />
                <div className="font-extrabold text-xs tracking-wider flex items-center">
                  <span className="text-[#FF5500]">Backfire</span>
                  <span className="text-white ml-1">Agency</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
