import React, { ChangeEvent, FC, useEffect, useState } from "react"
import { ProfilePropsType } from "../ProfileContainer"

type ProfileStatus_T = {
  status: string
  updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHook = (props: ProfileStatus_T) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
       setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode && (
        <div>
          <b>Статус:</b><span onDoubleClick={activateEditMode}>{ status || "----"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus value={status} onBlur={deActivateEditMode}></input>
        </div>
      )}
    </div>
  )
}
