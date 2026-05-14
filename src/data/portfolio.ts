import data from './portfolio.json'

export type PortfolioEntry = {
  id: string
  company: string
  role: string
  description: string
  tags: string[]
  link: string
  complete: boolean
  type?: 'contract' | 'side-project'
}

export const portfolio: PortfolioEntry[] = data as PortfolioEntry[]
