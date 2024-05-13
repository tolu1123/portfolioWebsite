import React from 'react';

const Code = () => {
    const htmlContent = `
    <div data-lang="python">
        
    </div>
    `;

    return (
        <div>
            <div>
        {/* // One line of the code attracts a section element */}
        <section className='block mb-0.5'>
            <span className='text-royalBlue mr-1'>import</span> 
            <span className='text-flameRed mr-1'>pandas</span> 
            <span className='text-royalBlue mr-1'>as</span> 
            <span className='text-mahoganyRed'>pd</span>
        </section>

        <section className='block mb-1.5'>
            <span className='text-royalBlue mr-1'>from</span> 
            <span>sklearn.model_selection</span>
        </section>

        <section className='block mb-0.5'>
            <span className='text-royalBlue mr-1'>import</span> 
            <span>train_test_split</span>
        </section>

        <section className='block mb-1.5'> 
            <span className='text-royalBlue mr-1'>from</span>
            <span className='text-mahoganyRed'>sklearn.ensemble</span>
        </section>

        <section className='block mb-1.5'>
            <span className='text-royalBlue mr-1'>import</span> 
            <span className='text-flameRed'>RandomForestClassifier</span>
        </section>

        <section className='block mb-1.5'>
            <span className='text-flameRed mr-1'>data</span> 
            <span className='text-purple-600 mr-1'>=</span> 
            <span className='text-mahoganyRed'>pd.read_csv</span>
            <span className='text-purple-600'>(</span>
            <span className='text-yellow-700'>'dataset.csv'</span>
            <span className='text-purple-600'>)</span>
        </section>
        
        <section className='mb-1.5'>
            <span className="text-mahoganyRed">
                X_train
            </span>
            <span className="text-purple-600 mr-1">
                , 
            </span>
            <span className="text-mahoganyRed">
                X_test
            </span>
            <span className="text-purple-600 mr-1">
                , 
            </span>
            <span className="text-mahoganyRed">
                y_train
            </span>
            <span className="text-purple-600 mr-1">
                , 
            </span>
            <span className="text-mahoganyRed mr-1">
                y_test
            </span>

            <span className='text-purple-600 mr-1'>
                =
            </span>

            <span className='text-mahoganyRed'>train_test_split</span>
            <span className='text-purple-600'>
                (
            </span>

            <span className="text-yellow-700">
                .....
            </span>
            {/* <br />
            <span className='text-mahoganyRed'>data.drop</span>
            <span className='text-purple-600'>
                (
            </span>
            <span className='text-yellow-700'>'target_column', axis=1</span>
            <span className='text-purple-600'>
                )
            </span>
            <span className='text-yellow-700'>, data['target_column'], test_size=0.2, random_state=42</span> */}
            <span className='text-purple-600'>
                )
            </span>
        </section>

        <section className="mb-1.5">
                <span className="text-flameRed mr-1">
                model
                </span>
                <span className="text-purple-600 mr-1">
                    =
                </span>
                <span className="text-mahoganyRed">
                RandomForestClassifier
                </span>
                <span className='text-purple-600'>
                    (
                </span>
                <span className="text-yellow-700">
                    n_estimators=100
                </span>
                <span className="text-purple-600">
                    )
                </span>
        </section>
         
        <section className='mb-1.5'>
            <span className="text-flameRed">
                model.fit
            </span>
            <span className="text-purple-600">
                (
            </span>
            <span className="text-yellow-700">
                X_train, y_train
            </span>
            <span className="text-purple-600 mr-1">
                )
            </span>
            
        </section>

        <section className='mb-1.5'>
        <span className="text-flameRed mr-1">
                accuracy
            </span>
            <span className="text-purple-600 mr-1">
                =
            </span>
            <span className="text-mahoganyRed">
                model.score
            </span>
            <span className="text-purple-600">
                (
            </span>
            <span className="text-yellow-700">
                X_test, y_test
            </span>
            <span className="text-purple-600">
                )
            </span>
        </section>

        <section className='mb-1.5'>
            <span className="text-royalBlue">print</span>
            <span className="text-purple-600">(</span>
            <span className="text-yellow-700">"Accuracy:"</span>
            <span className="text-purple-600 mr-1">,</span>
            <span className="">
                accuracy
            </span>
            <span className="text-yellow-700">
            )
            </span>
        </section>
        </div>
        </div>
    );
};

export default Code;