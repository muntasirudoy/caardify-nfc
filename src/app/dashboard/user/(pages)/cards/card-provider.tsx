import { useFetch } from "@/hooks/use-fetch";
import { createContext, useContext, useState } from "react";
import { UserCard, CardResponse } from "./_components/card.schema";
import { useQuery } from "react-query";

type CardContextProps = {
    userCards: UserCard[];
    singleCard: UserCard | null;
    isLoading: boolean;
    isError: boolean;
    message: string;
    statusCode: number;
    isSingleCardLoading: boolean, isSingleCardError: boolean
};

const CardContext = createContext<CardContextProps | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
    const { fetchData } = useFetch();
    const [userCards, setUserCards] = useState<UserCard[]>([]);
    const [singleCard, setSingleCard] = useState<UserCard | null>(null);
    const [message, setMessage] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>(200);

    const getCards = async () => {
        const data = await fetchData("/profile/cards/user");
        return data as CardResponse;
    };

    const getCardById = async (id: string) => {
        const data = await fetchData(`/profile/cards/${id}`);
        return data as CardResponse;
    };

    const { isLoading, isError } = useQuery<CardResponse, unknown>(
        "cards",
        getCards,
        {
            onSuccess: (response) => {
                setUserCards(response.data);
                setMessage(response.message);
                setStatusCode(response.statusCode);
            },
        }
    );

    const { isLoading: isSingleCardLoading, isError: isSingleCardError } = useQuery<CardResponse, unknown>(
        ["card", singleCard?.id],
        () => getCardById(singleCard?.id || ""),
        {
            enabled: !!singleCard?.id,
            onSuccess: (response) => {
                setSingleCard(response.data[0]);
            },
        }
    );
    console.log(singleCard);

    return (
        <CardContext.Provider value={{ userCards, singleCard, isLoading, isError, message, statusCode, isSingleCardLoading, isSingleCardError }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCard = () => {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error("useCard must be used within a CardProvider");
    }
    return context;
};
