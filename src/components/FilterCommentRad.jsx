import '../styles/styles_rad.css'

function FilterCommentRad(){
    return (
        <div class="filter-section_rad">
            <div class="filter-option_rad">
                <img src="../icons_rad/eva_funnel-outline.svg" alt="icon" class="filter-img"/>
                <p class="filter-title_rad">Filtering:</p>
            </div>
            <div id="filter-select-first_rad" class="filter-select_rad">
                <p class="filter-sel_rad">Recommended</p>
                <img src="../icons_rad/down-outlined.svg" alt="" class="down-outline_rad"/>
            </div>

            <div class="filter-select_rad">
                <p class="filter-sel_rad">Traveler type</p>
                <img src="../icons_rad/down-outlined.svg" alt="" class="down-outline_rad"/>
            </div>

            <div class="filter-select_rad">
                <p class="filter-sel_rad">Rating</p>
                <img src="../icons_rad/down-outlined.svg" alt="" class="down-outline_rad"/>
            </div>

            <div id="filter-select_rad" class="filter-select_rad">
                <img src="../icons_rad/akar-icons_search.svg" alt="" class="filter-search_rad"/>
                <p id="filter-sel_rad" class="filter-sel_rad">Search Here</p>
            </div>
        </div>
    );
}

export default FilterCommentRad;