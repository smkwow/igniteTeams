import { Button } from "@/components/Button";
import { Header } from '@/components/Header/Header';
import { HightLight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

type Props = {

}

export function NewGroup() {

    const navigation = useNavigation()

    function handleNew() {
        navigation.navigate('players', { group: "Rocket" })

    }

    return (

        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <HightLight
                    title="Nova turma"
                    subtitle="crire a turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"


                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}