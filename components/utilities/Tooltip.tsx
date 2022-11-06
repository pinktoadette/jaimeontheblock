import { FC, useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip, { TooltipProps } from 'react-bootstrap/Tooltip';
import { APIService } from 'service/api';

const JToolTip = (props: any) =>  {
  const [define, setDefine] = useState(false);

  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>
       { define }
    </Tooltip>
  );

  useEffect(()=>{
    if (!define) {
      fetch(`api/word?text=${props.text.toLowerCase()}`)
      .then(data => data.json())
      .then(data => {
        const {definition} = data;
          setDefine(definition);
      });
    }
  }, [define])


  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <span className="primary tip-tag"><u>{props.text}</u></span>
    </OverlayTrigger>
  );
}

export default JToolTip;