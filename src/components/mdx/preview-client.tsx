import * as React from 'react'
import { Preview } from './preview'
import { RefreshButton } from './refresh-button';

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const previewClient = (props: PreviewProps) => {

  const [key, setKey] = React.useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  }


  return (
    <div className='relative'>
      <RefreshButton onRefresh={handleRefresh} />
      <div key={key}>
        <Preview {...props} />
      </div>

    </div>
  )
}

export default previewClient;