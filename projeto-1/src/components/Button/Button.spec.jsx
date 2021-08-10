import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
    it('should render the button with the text "Load More"', () => {
        const fn = jest.fn()
        render(<Button text='Load more' onClick={fn}/>)
        expect.assertions(1)

        const button = screen.getByRole('button', {name: /load more/i})
        expect(button).toBeInTheDocument()
    })

    it('should call function on button click', () => {
        const fn = jest.fn()

        render(<Button text='Load more' onClick={fn}/>)

        const button = screen.getByRole('button', {name: /load more/i})

        // userEvent.click(button)
        fireEvent.click(button)
        fireEvent.click(button)
        
        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('should be disabled when disabled is true', () => {
        const fn = jest.fn()

        render(<Button text='Load more' disabled={true} onClick={fn}/>)

        const button = screen.getByRole('button', {name: /load more/i})

        expect(button).toBeDisabled()
    })

    it('should be enable when disabled is false', () => {
        const fn = jest.fn()
        render(<Button text='Load more' disabled={false} onClick={fn}/>)

        const button = screen.getByRole('button', {name: /load more/i})

        expect(button).toBeEnabled()
    })

    it('should match snapshot', () => {
        const fn = jest.fn()
        const {container} = render(<Button text='Load more' disabled={false} onClick={fn}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})