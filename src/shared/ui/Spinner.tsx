import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin, SpinProps } from 'antd';

const fullStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

type Props = SpinProps & {
  isFullScreen?: boolean;
};

export const Spinner = ({ isFullScreen, ...spinProps }: Props) => {
  const styles = isFullScreen ? fullStyle : {};

  return (
    <Flex align="center" gap="middle" style={styles}>
      <Spin indicator={<LoadingOutlined spin />} size="large" {...spinProps} />
    </Flex>
  );
};
