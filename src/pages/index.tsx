import {GetServerSideProps, NextPage} from "next"

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
      <div>
        Your query is: <br/>
        <code>
          {context.q}
        </code>
      </div>
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
