import { Agent, Category } from '../types/agent';

export const categories: Category[] = [
  { id: 'customer-service', name: 'Customer Service', icon: '💬', count: 45 },
  { id: 'data-analysis', name: 'Data Analysis', icon: '📊', count: 32 },
  { id: 'content-creation', name: 'Content Creation', icon: '✍️', count: 28 },
  { id: 'automation', name: 'Automation', icon: '🤖', count: 51 },
  { id: 'productivity', name: 'Productivity', icon: '⚡', count: 19 },
  { id: 'other', name: 'Other', icon: '🎯', count: 15 }
];

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'CustomerChat Pro',
    description: 'Advanced customer service chatbot with sentiment analysis and multilingual support',
    longDescription: 'CustomerChat Pro is a sophisticated AI agent designed to revolutionize your customer service experience. Built with advanced natural language processing capabilities, it can understand customer queries in multiple languages and respond with human-like empathy and precision. The agent features real-time sentiment analysis, allowing it to detect frustrated customers and escalate issues appropriately. With integration capabilities for popular CRM systems and 24/7 availability, CustomerChat Pro can handle up to 1000 conversations simultaneously while maintaining personalized responses.',
    price: 149,
    category: 'customer-service',
    tags: ['chatbot', 'customer-service', 'multilingual', 'sentiment-analysis'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 234,
    seller: {
      name: 'TechBot Solutions',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9
    },
    capabilities: [
      'Multi-language support (50+ languages)',
      'Real-time sentiment analysis',
      'CRM integration',
      'Escalation management',
      'Custom branding options',
      'Analytics dashboard'
    ],
    useCases: [
      'E-commerce customer support',
      'SaaS help desk automation',
      'Lead qualification',
      'Order tracking assistance',
      'FAQ automation',
      'Complaint resolution'
    ],
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'DataInsight AI',
    description: 'Powerful data analysis agent that transforms raw data into actionable insights',
    longDescription: 'DataInsight AI is your personal data scientist, capable of processing vast amounts of structured and unstructured data to uncover hidden patterns and trends. This intelligent agent can automatically generate comprehensive reports, create visualizations, and provide predictive analytics. It supports multiple data formats including CSV, JSON, SQL databases, and API integrations. With machine learning capabilities, it can identify anomalies, forecast trends, and suggest data-driven strategies for business growth.',
    price: 199,
    category: 'data-analysis',
    tags: ['data-analysis', 'machine-learning', 'visualization', 'reporting'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewCount: 156,
    seller: {
      name: 'DataCorp Analytics',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    },
    capabilities: [
      'Multi-format data processing',
      'Automated report generation',
      'Predictive analytics',
      'Anomaly detection',
      'Interactive dashboards',
      'API integrations'
    ],
    useCases: [
      'Sales performance analysis',
      'Customer behavior insights',
      'Financial forecasting',
      'Market trend analysis',
      'Risk assessment',
      'Operational efficiency optimization'
    ],
    featured: true,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    name: 'ContentCraft Writer',
    description: 'Creative AI writer that produces high-quality content for blogs, social media, and marketing',
    longDescription: 'ContentCraft Writer is a versatile AI content creation agent that can produce engaging, SEO-optimized content across multiple formats and industries. From blog posts and social media captions to email campaigns and product descriptions, this agent adapts its writing style to match your brand voice. It includes built-in SEO optimization, plagiarism checking, and content performance analytics. The agent can research topics, fact-check information, and ensure all content meets your quality standards.',
    price: 89,
    category: 'content-creation',
    tags: ['content-writing', 'seo', 'marketing', 'copywriting'],
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviewCount: 189,
    seller: {
      name: 'Creative AI Studio',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7
    },
    capabilities: [
      'Multi-format content creation',
      'SEO optimization',
      'Brand voice adaptation',
      'Research and fact-checking',
      'Performance analytics',
      'Plagiarism detection'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Press releases',
      'Website copy'
    ],
    featured: true,
    createdAt: '2024-01-12'
  },
  {
    id: '4',
    name: 'WorkFlow Optimizer',
    description: 'Intelligent automation agent that streamlines business processes and workflows',
    longDescription: 'WorkFlow Optimizer is a comprehensive automation agent designed to eliminate repetitive tasks and optimize business processes. It can integrate with popular business tools like Slack, Google Workspace, Microsoft 365, and hundreds of other applications. The agent learns from your existing workflows and suggests improvements, automates routine tasks, and provides real-time process monitoring. With its no-code interface, even non-technical users can create complex automation workflows.',
    price: 129,
    category: 'automation',
    tags: ['automation', 'workflow', 'integration', 'productivity'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewCount: 167,
    seller: {
      name: 'AutoFlow Systems',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    },
    capabilities: [
      'Multi-platform integrations',
      'No-code workflow builder',
      'Process optimization',
      'Real-time monitoring',
      'Task automation',
      'Custom triggers and actions'
    ],
    useCases: [
      'Email automation',
      'Document processing',
      'Data synchronization',
      'Report generation',
      'Task scheduling',
      'Team collaboration'
    ],
    featured: false,
    createdAt: '2024-01-08'
  },
  {
    id: '5',
    name: 'SalesBoost Assistant',
    description: 'AI-powered sales assistant that helps qualify leads and close deals faster',
    longDescription: 'SalesBoost Assistant is a sophisticated AI agent designed to supercharge your sales process. It can engage with prospects, qualify leads, schedule meetings, and provide personalized product recommendations. The agent analyzes customer behavior and preferences to suggest the most effective sales strategies. With CRM integration and email automation, it ensures no lead falls through the cracks while providing valuable insights into your sales pipeline.',
    price: 179,
    category: 'productivity',
    tags: ['sales', 'crm', 'lead-qualification', 'automation'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviewCount: 98,
    seller: {
      name: 'SalesAI Pro',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6
    },
    capabilities: [
      'Lead qualification',
      'Meeting scheduling',
      'Product recommendations',
      'CRM integration',
      'Email automation',
      'Sales analytics'
    ],
    useCases: [
      'Lead nurturing',
      'Sales pipeline management',
      'Customer onboarding',
      'Upselling opportunities',
      'Follow-up automation',
      'Performance tracking'
    ],
    featured: false,
    createdAt: '2024-01-05'
  },
  {
    id: '6',
    name: 'CodeReview Master',
    description: 'Expert code review agent that analyzes code quality and suggests improvements',
    longDescription: 'CodeReview Master is an advanced AI agent that performs comprehensive code reviews across multiple programming languages. It analyzes code for bugs, security vulnerabilities, performance issues, and adherence to best practices. The agent provides detailed feedback with specific suggestions for improvement and can integrate with popular development tools like GitHub, GitLab, and Bitbucket. It supports over 30 programming languages and can be customized for specific coding standards.',
    price: 99,
    category: 'automation',
    tags: ['code-review', 'development', 'quality-assurance', 'security'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 145,
    seller: {
      name: 'DevAI Solutions',
      avatar: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9
    },
    capabilities: [
      'Multi-language code analysis',
      'Security vulnerability detection',
      'Performance optimization',
      'Git integration',
      'Custom coding standards',
      'Automated reporting'
    ],
    useCases: [
      'Pull request reviews',
      'Code quality assurance',
      'Security audits',
      'Performance optimization',
      'Coding standards enforcement',
      'Junior developer mentoring'
    ],
    featured: false,
    createdAt: '2024-01-03'
  }
];