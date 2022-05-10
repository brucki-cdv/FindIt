import style from "./UserReportCard.module.css";
import UserCardContainer from "./UserCardContainer";
import UserCardImage from "./UserCardImage";
import UserCardInfo from "./UserCardInformations";
import UserCardDate from "./UserCardDate";
import UserCardTitle from "./UserCardTitle";
import UserCardDescription from "./UserCardDescription";
import UserCardButton from "./UserCardButton";

export default function UserReportCard({image, title, date, description}) {
    return (
        <UserCardContainer>
            <UserCardImage src={image}/>
            <UserCardInfo>
                <UserCardDate>{date}</UserCardDate>
                <UserCardTitle>{title}</UserCardTitle>
                <UserCardDescription>{description}</UserCardDescription>
            </UserCardInfo>
            <UserCardButton />
        </UserCardContainer>   
    )
}