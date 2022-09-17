import {getCategories} from '../../api'
import {Table} from 'tdesign-react'

let res:any = await getCategories('rest/categories')

export default function categoriesList() {
  return(
      <Table
          rowKey={res}
          columns={[
            {
              colKey: 'id',
              title: 'id'
            },
            {
              colKey: 'name',
              title: '分类名称'
            },
            {
              colKey: 'parent',
              title: '上层分类id'
            }
          ]}
          data={res}
          hover
          pagination={{
            defaultPageSize: 10,
            total: 30
          }}
          size="small"
          stripe
          tableLayout="auto"
          verticalAlign="middle"
          style={{height : '100%'}}
      />
  )
}
