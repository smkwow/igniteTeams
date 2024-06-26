import { Button } from '@/components/Button';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';
import { Header } from '@/components/Header/Header';
import { HightLight } from '@/components/Highlight';
import { Input } from '@/components/Input';
import { ListEmpty } from '@/components/ListEmpty';
import { PlayerCard } from '@/components/PlayerCard';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<string[]>(['Gelson', 'Thiago', 'Hedgar'])

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('new')
    }
    

    return (
        <Container>
            <Header showBackButton />

            <HightLight
                title="Nome da turma"
                subtitle="adicine a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon
                    icon='add'
                />
            </Form>



            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isAtive={item === team}
                            onPress={() => { setTeam(item) }}
                        />

                    )}
                    horizontal
                />


                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        onRemove={() => { }}
                        name={item}
                    />

                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Não há pessoas nesse time.'
                    />
                )}

                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}

            />

            <Button
                title='Remover Turma'
                type='SECONDARY'
                onPress={handleGoBack}
            />

        </Container>
    )
}