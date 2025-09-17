import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ChevronDown, Users, Clock, Star, BookOpen, Palette, TrendingUp, Code, ArrowRight, CheckCircle } from 'lucide-react'
import logoTransparente from './assets/logo_nitro_transparente.png'
import logoFraseAzul from './assets/logo-frase-azul.png'
import './App.css'

function App() {
  const [activeTrack, setActiveTrack] = useState(null)

  const tracks = [
    {
      id: 'marketing',
      title: 'Marketing e Comunicação',
      icon: TrendingUp,
      color: 'bg-orange-500',
      description: 'Desenvolva habilidades de comunicação e marketing digital',
      fundamentals: [
        'Comunicação Interpessoal',
        'Social Selling',
        'Marketing Digital',
        'Desenvolvimento de Ideias e Soluções'
      ],
      advanced: [
        'Storytelling Digital',
        'Negociação e Influência',
        'Posicionamento de Marca no Digital',
        'Neuromarketing e Psicologia do Consumo'
      ],
      elective: 'Negócios e Empreendedorismo'
    },
    {
      id: 'design',
      title: 'Design',
      icon: Palette,
      color: 'bg-purple-500',
      description: 'Explore o mundo do design gráfico e de produtos',
      fundamentals: [
        'Introdução ao Design Gráfico',
        'Introdução ao Design de Produto',
        'Design de Interfaces para Iniciantes',
        'Ferramentas de Design Digital'
      ],
      advanced: [
        'Desenvolvimento de Produtos',
        'Ferramentas de Design de Interfaces: Figma',
        'Design para Marcas e Identidade Visual',
        'Motion Design e Animação Digital'
      ],
      elective: 'Tecnologia e Inovação'
    },
    {
      id: 'business',
      title: 'Negócios e Empreendedorismo',
      icon: Users,
      color: 'bg-green-500',
      description: 'Aprenda a empreender e gerir negócios',
      fundamentals: [
        'Empreendedorismo',
        'Pensamento Crítico e Liderança',
        'Data Science',
        'Análise de Mercado'
      ],
      advanced: [
        'Gestão de Pessoas',
        'Investimento e Finanças',
        'Estratégia de Vendas',
        'Inovação e Modelos de Negócio'
      ],
      elective: 'Marketing e Comunicação'
    },
    {
      id: 'technology',
      title: 'Tecnologia e Inovação',
      icon: Code,
      color: 'bg-blue-500',
      description: 'Mergulhe no mundo da tecnologia e programação',
      fundamentals: [
        'Lógica de Programação e Algoritmos',
        'Fundamentos de Análise de Dados',
        'Segurança de Dados',
        'Fundamentos da Engenharia de Software'
      ],
      advanced: [
        'Desenvolvimento de Aplicativos',
        'Introdução à Inteligência Artificial',
        'Fluxos de Automação (n8n)',
        'Estratégias Power by AI'
      ],
      elective: 'Design'
    }
  ]

  const yearStructure = [
    { year: 1, description: 'Dois cursos de fundamento' },
    { year: 2, description: 'Um curso de fundamento (eletiva) e um curso de fundamento' },
    { year: 3, description: 'Um fundamento da trilha e um de aprofundamento' },
    { year: 4, description: 'Dois cursos de aprofundamento' },
    { year: 5, description: 'Um curso de aprofundamento e um curso de fundamento (eletiva)' }
  ]

  const benefits = [
    { icon: Users, title: 'Turmas Reduzidas', description: 'Ensino personalizado com atenção individual' },
    { icon: Clock, title: 'Flexibilidade de Horários', description: 'Estude no seu próprio ritmo' },
    { icon: Star, title: 'Professores de Alto Nível', description: 'Mentores experientes e qualificados' },
    { icon: BookOpen, title: 'Metodologia Inovadora', description: 'Projetos práticos e estimulantes' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <img src={logoTransparente} alt="Nitro Academy" className="h-12" />
        </div>
      </header>



      {/* Tracks Section */}
      <section id="tracks" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Escolha sua Trilha</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            4 trilhas especializadas com 8 cursos cada, totalizando 40 cursos disponíveis
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {tracks.map((track) => (
              <Card 
                key={track.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeTrack === track.id ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${track.color}`}>
                      <track.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{track.title}</CardTitle>
                      <CardDescription>{track.description}</CardDescription>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform ${
                    activeTrack === track.id ? 'rotate-180' : ''
                  }`} />
                </CardHeader>
                
                {activeTrack === track.id && (
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Ciclo 1 - Fundamentos</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {track.fundamentals.map((course, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-600">Ciclo 2 - Aprofundamento</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {track.advanced.map((course, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-600">Eletiva Disponível</h4>
                        <Badge variant="outline" className="text-orange-600 border-orange-600">
                          {track.elective}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Year Structure */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Como funciona a progressão</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {yearStructure.map((year) => (
                <Card key={year.year} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      {year.year}º
                    </div>
                    <CardTitle className="text-lg">Ano {year.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{year.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Sobre a Nitro Academy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A Nitro Academy foi fundada com a intenção de oferecer uma educação complementar inovadora para adolescentes, 
              ajudando-os a descobrir suas vocações e talentos através de projetos práticos e estimulantes.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">40+</div>
                <p className="text-gray-600">Cursos Disponíveis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
                <p className="text-gray-600">Trilhas Especializadas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">12-17</div>
                <p className="text-gray-600">Idade dos Alunos</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={logoTransparente} alt="Nitro Academy" className="h-10 mb-2" />
              <p className="text-gray-400">Transforme tempo livre em talento</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 Nitro Academy. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

