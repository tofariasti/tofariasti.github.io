import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LocaleProvider, useLocale } from '../context/LocaleContext'
import { LANG_KEY } from '../data/constants'

function Probe() {
  const { locale, setLocale, t } = useLocale()
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="text">{t({ pt: 'Olá', en: 'Hello' })}</span>
      <button type="button" onClick={() => setLocale('en')}>EN</button>
    </div>
  )
}

describe('LocaleContext', () => {
  it('defaults to pt and switches to en', () => {
    localStorage.clear()
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    )

    expect(screen.getByTestId('locale')).toHaveTextContent('pt')
    expect(screen.getByTestId('text')).toHaveTextContent('Olá')

    fireEvent.click(screen.getByRole('button', { name: 'EN' }))

    expect(screen.getByTestId('locale')).toHaveTextContent('en')
    expect(screen.getByTestId('text')).toHaveTextContent('Hello')
    expect(localStorage.getItem(LANG_KEY)).toBe('en')
  })
})
