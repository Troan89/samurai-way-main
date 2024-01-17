import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfile_T} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfo_T ={
    profile: UserProfile_T | null
}

export const ProfileInfo = ({profile}: ProfileInfo_T) => {
    if (!profile) { // потом редирект на логин
        return <Preloader/>
    }

    let userContacts = []
    for (const contact of Object.entries(profile.contacts)) {
        userContacts.push(`${contact[0]}: ${contact[1]}`)
    }

    return (
        <div>
            <div>
                <img
                    src="https://yandex-images.clstorage.net/bwK4G9198/2daeb0bP3AVp/Wd93qHSrp5aZs1YWIS05tKCeGz04kmcaBG6yTTkjZWa5ddfTQ-HfWi3H37kDE-hD6yUtU6hTMfmhLt8ybmkkbFi7sxxVHnLSOFYWlhF9GGF0rwr4mNe2viGudl2MwzVGjxOl9BSXqKyfQDgrtxOtpq4kmYK8FYI9tUldUhlexwuqH4cYMqmGRN9gNDRhrBlw0y7KO9jlJVjxPiQI7Sfh0p9i5rSH9Uv9PrB52hajfzb_R8xinZZTGhdbPeCKDHZJKm41i-IK1MTNsZS0QY1I4TKsqCkJpWVZMyy2yZwUUJK-ALZG9TSJDS3wevlkU4zWHIZcEy4lMWiFqf5ymm-XeThthwtxSCVFDxNHlgI8CZBi7IhZCRblqOPfBQtfBeExPsPF16WUCTzvQghpJcIudJ9HThFNZTBKtPi_A3t_tqhYzAbqErrVRV2RpySRrEjCUk1YS3ukhwhjLSZq3GZR8c-SxsTmhIrdrEELyBWB3ERNVV1BTebjSwUpDeB7bkbaWG5munAJRrW9EnZV0H4Yw9Ffysqa11fp0d7Ean80UCD98mekduUpft2zeApGAD-HbeVtww3G4XkXCp-hag2VegrM95ow2FUnLYPkVWHv22LhfTlY6ic1GILvpspcZkHDzvJndUQ0Cc0vgNroZOMdNqxWLkFvZRGrF2vfQTitdztaThY54llWx9zCtMQhj5qw8V3YaYuWt5ohLBYaDAZCQ15iJIZHNun-zxD7KWWTb6YsJBwBHQdDWfTKrQJJ3VbKad3lmiDZVSaM0EQ0gTx7EQCsetmqtxaowP0laU7HQINMsuX2xvQanY2hevh3oW9UnlY-Uh_HIJk2SSwBC480S1uuFgoD2RfFz0BXh6M9S7HRfJlqq6a1OKGcVSr8NPAT3WJlllbVW319AcpqNSF9FD63rRKthlObRpn8MVlsxmgKrDcIEvgXpd5ipaZBPRpzctwZeGk2tvqQvrRYc"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <div>
                    Полное имя: {profile.fullName}
                </div>
                <div>
                    Статус: {profile.aboutMe}
                </div>
                <div>
                    Ищу работу: {profile.lookingForAJob ? profile.lookingForAJobDescription : "Не ищу)"}
                </div>
                <div>
                    Контакты: {userContacts.map(contact=> {
                        return <div>
                            {`${contact}, `}
                        </div>
                })}
                </div>
            </div>
        </div>


    )
}