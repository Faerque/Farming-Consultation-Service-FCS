import React from 'react';


const AllServices = ({ service }) => {

    console.log(service.name, service.description, service._id);
    return (
        <section >
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{service.name}</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default AllServices;