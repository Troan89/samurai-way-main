import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test('should render with initial status', () => {
        const component = create(<ProfileStatus status="hai" updateUserStatus={jest.fn()} />);
        const instance = component.getInstance();
        expect(instance?.props.status).toBe("hai")
    });

    test('after creation <span> should be displayed', ()=>{
        const component = create(<ProfileStatus status="hai" updateUserStatus={jest.fn()}/>)
        const instance = component.root;
        let span = instance?.findByType("span")
        expect(span?.children[0]).toBe('hai')
        expect(span?.children[0]).not.toBeNull()
    })

    test('after creation <input> should not be displayed', ()=>{
        const component = create(<ProfileStatus status="hai" updateUserStatus={jest.fn()}/>)
        const instance = component.root;

        expect(()=>{
            let input = instance?.findByType("input")
        }).toThrow()
    })

    test('input should be displayed in editMode instead of span', ()=>{
        const component = create(<ProfileStatus status="hai" updateUserStatus={jest.fn()}/>)
        const instance = component.root;
        let span = instance?.findByType("span")
        span?.props.onDoubleClick()
        let input = instance?.findByType("input")

        expect(input?.props.value).toBe('hai')
    })

    // test('callback should be called', ()=>{
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatus status="hai" updateUserStatus={mockCallback}/>)
    //     const instance = component.getInstance();
    //     instance && instance.deActivateEditMode()
    //
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // })
});