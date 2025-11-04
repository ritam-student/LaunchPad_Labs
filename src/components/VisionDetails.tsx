
import { useParams } from 'react-router-dom';

function VisionDetails(){

    const { name } = useParams<{ name?: string }>();
    return <div>
        VisionDetails {name}
    </div>
}

export default VisionDetails;