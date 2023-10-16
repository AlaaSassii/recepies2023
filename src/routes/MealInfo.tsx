import { useParams } from 'react-router-dom'
import PageContainer from '../components/common/PageContainer';
const MealInfo = () => {
    const { id } = useParams();
    return (
        <PageContainer>{id}</PageContainer>
    )
}

export default MealInfo