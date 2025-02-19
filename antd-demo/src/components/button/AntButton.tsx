import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const AntButton = () => {

    return (


        <Button type="primary" loading={{ icon: <SyncOutlined spin /> }}>
            Loading Icon
        </Button>
    )
};


export default AntButton