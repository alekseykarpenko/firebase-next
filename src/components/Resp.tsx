import React from 'react'

export type Props = {
  qParam: string
};

const Resp: React.FC<Props> = ({qParam}) => {
  return (
    <div>
      Your query is: <br/>
      <code>
        {qParam}
      </code>
    </div>
  )
}

export default Resp
