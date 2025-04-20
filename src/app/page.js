import Menu from '@/components/Menu'

export default async function Home() {
  const dataList = [];
  try{
    const res = await fetch("http://localhost:8080/menu/getall",{cache: 'no-store'})
    dataList = await res.json();
    console.log(dataList)
  }catch{
    console.log('error al fetch')
  }

  return (
   <Menu dataList={dataList}/>
  )
}
