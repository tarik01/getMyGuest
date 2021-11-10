import EventItem from '../EventItem';
import { Container } from './styles';

export default function EventList(){
    return (
        <Container>
            <li><EventItem /></li>
            <li><EventItem /></li>
            <li><EventItem /></li>
            <li><EventItem /></li>
            <li><EventItem /></li>
            <li><EventItem /></li>
        </Container>
    )
}