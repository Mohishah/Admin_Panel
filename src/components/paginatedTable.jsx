import React, { useEffect, useState } from 'react';

const PaginatedTable = ({children,data,dataInfo,numOfPage,additionField,searchParams}) => {

    const [tableData,setTableData]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [pages,setPages]=useState([])
    const [pageCount,setPageCount]=useState(1)
    const [initData,setInitData]=useState(data)
    const [searchChar,setSearchChar]=useState("")

    useEffect(()=>{
        const pCount = Math.ceil(initData.length / numOfPage);
        setPageCount(pCount);
        let pArr=[]
        for(let i =1 ; i<= pCount ; i++)
            pArr=[...pArr,i]
        setPages(pArr)
    },[initData])

    useEffect(()=>{
        let start = (currentPage*numOfPage)-numOfPage
        let end = (currentPage*numOfPage)
        setTableData(initData.slice(start,end))
    },[currentPage , initData])

    useEffect(()=>{
        setInitData(data.filter(d=>d[searchParams.searchfield].includes(searchChar)))
        setCurrentPage(1)
    },[searchChar , data])
 
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder={searchParams.placeholder}
                        onChange={(e)=>setSearchChar(e.target.value)}
                        />
                        <span className="input-group-text">{searchParams.title}</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    {children}
                </div>
            </div>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        {dataInfo.map(i=>(
                            <th key={i.field}>{i.title}</th>
                        ))}
                        {
                            additionField ? additionField.map((a , index)=>(
                                <th key={a.id+"__"+index}>{a.title}</th>
                            ))
                                : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(d=>(
                        <tr key={d.id}>
                            {dataInfo.map(i=>(
                                <td key={i.field+"_"+d.id}>{d[i.field]}</td>
                            ))}
                            {
                                additionField ? additionField.map((a , index)=>(
                                    <td key={a.id+"___"+index}>{a.elements(d)}</td>
                                ))
                                     : null
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                pages.length > 1 ? (
                <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                    <ul className="pagination dir_ltr">
                        <li className="page-item">
                            <span className={`page-link pointer ${currentPage === 1 ? "disabled" : "" }`}  aria-label="Previous" onClick={()=>setCurrentPage(currentPage - 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </span>
                         </li>
                        {
                            pages.map(page=>(
                                <li key={page} className="page-item"><span className={`page-link ${currentPage === page ? "alert-success" : "" }`} onClick={()=>setCurrentPage(page)}>{page}</span></li>
                            ))
                        }
                        <li className="page-item">
                            <span className={`page-link pointer ${currentPage === pageCount ? "disabled" : "" }`} aria-label="Next" onClick={()=>setCurrentPage(currentPage + 1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </span>
                        </li>
                    </ul>
                </nav>
                ) : null
            }
            
        </>
    );
}

export default PaginatedTable;
