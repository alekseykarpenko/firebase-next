import {GetServerSideProps, NextPage} from "next"
import dynamic from 'next/dynamic'

const Resp = dynamic(() => import('components/Resp'), {
  ssr: false,
})

type Props = {
  q: string | null
}

const IndexPage:NextPage<Props> = (context) => {
  if (!context.q) {
    return <div>Query not provided!</div>
  }
  return (
    <div>
      Hello World. <br/>
      <Resp qParam={context.q}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { query } = context;

  const q = query.q as string ?? null

  return {
    props: {
      q
    },
  };
}


export default IndexPage
