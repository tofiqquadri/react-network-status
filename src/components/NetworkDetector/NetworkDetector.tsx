
import { useNetworkStatus } from '../../index';
import { IPollingConfig } from '../../types';

const NetworkDetector: React.FC<{ config: IPollingConfig | boolean, onChange: (param: boolean) => void }> = ({ config = {}, onChange }) => {
    useNetworkStatus((online) => onChange(online), config);
    return null;
};

export default NetworkDetector;
