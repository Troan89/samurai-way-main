import {ComponentType} from "react";
import {useParams} from "react-router-dom";


export function WithRouterHOC<T>(Component: ComponentType<T>) {
    const ComponentWithRouterProp = (props: T) => {
        const params = useParams<{ id: string }>();
        const { ...restProps } = props
        return params ? <Component {...restProps as T} id={params.id} /> : <Component {...restProps as T & {}} id={"2"} />
    }
    return ComponentWithRouterProp
}