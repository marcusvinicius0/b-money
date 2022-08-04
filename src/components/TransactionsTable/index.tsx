import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';

import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { api } from '../../services/api';


export function TransactionsTable(){
    // const [repositories, setRepositories] = useState([]);

    // const handleDelete = useCallback((repo) => {
    //     const find = repositories.filter(r => r.name !== repo);
    //     setRepositories(find);
    //     toast.success("Transação deletaa com sucesso!")
    // })

    useEffect(() => {

        api.get('transactions')
        .then(response => console.log(response.data))

    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>03/08/22</td>
                        <td><button>< FaTrash /></button></td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="widthdraw">- R$700</td>
                        <td>Casa</td>
                        <td>01/08/22</td>
                        <td><button>< FaTrash /></button></td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}