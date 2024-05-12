import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@/components/Button';
import { GroupCard } from '@/components/GroupCard';
import { Header } from "@/components/Header";
import { HightLight } from '@/components/Highlight';
import { ListEmpty } from '@/components/ListEmpty';
import { Container } from './styles';

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['Galera da Rocket'])



    return (
        <Container  >
            <Header />
            <HightLight
                title='Turmas'
                subtitle='jogue com sua turma'
            />


            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty message='Que tal cadastrar a primeira turma?' />
                )}
            />


            <Button
                title='Criar nova turma'
            />

        </Container>



    );
}
