import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';

const HorizontalScroll = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
        {data.map((item) => (
            <div 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScroll;