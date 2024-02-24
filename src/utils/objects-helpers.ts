import {UsersType} from "../state/State";
export const updateObjectInArray = (items: UsersType[], itemsId: string, objPropName: any, newObjProps: any) => {
    // @ts-ignore
    return items.map((user) => (itemsId === user[objPropName] ? { ...user, ...newObjProps } : user))
}
