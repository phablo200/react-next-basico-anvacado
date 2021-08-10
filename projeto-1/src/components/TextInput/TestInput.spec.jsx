import { render, screen } from "@testing-library/react"
import { TextInput } from '.'
import userEvent from '@testing-library/user-event'

describe ('<TextInput />', () => {
    it('should hava a value of searchValue', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={'testando'} />)
        const input = screen.getByPlaceholderText(/type or search/i)
        expect(input.value).toBe('testando')
    })

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} />)
        const input = screen.getByPlaceholderText(/type or search/i)
        const value = 'o valor'

        userEvent.type(input, value)
        expect(input.value).toBe(value)
    })

    it('should match snapshot', () => {
        const fn = jest.fn()
        const {container} = render(<TextInput handleChange={fn} />)
        expect(container).toMatchSnapshot()
    })
})